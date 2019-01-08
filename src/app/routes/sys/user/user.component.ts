import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';
import { NzFormatEmitEvent, NzTreeNodeOptions } from 'ng-zorro-antd';

@Component({
  selector: 'app-sys-user',
  templateUrl: './user.component.html',
  styles: [
    `
      .ant-cascader-picker {
        width: 300px;
      }
    `,
  ],
})
export class SysUserComponent implements OnInit {
  url = `/user`;

  /** init data */
  public nzOptions = [];

  /** ngModel value */
  public values: any[] = null;

  @ViewChild('treeCom') treeCom;

  nodes: NzTreeNodeOptions[] = [];

  nzClick(event: NzFormatEmitEvent): void {
    console.log(
      event,
      event.selectedKeys,
      event.keys,
      event.nodes,
      this.treeCom.getSelectedNodeList(),
    );
  }

  nzCheck(event: NzFormatEmitEvent): void {
    console.log(event, event.checkedKeys, event.keys, event.nodes);
  }

  // nzSelectedKeys change
  nzSelect(keys: string[]): void {
    console.log(keys, this.treeCom.getSelectedNodeList());
  }

  searchSchema: SFSchema = {
    properties: {
      no: {
        type: 'string',
        title: '编号',
      },
    },
  };
  @ViewChild('st') st: STComponent;
  columns: STColumn[] = [
    { title: '编号', index: 'no' },
    { title: '调用次数', type: 'number', index: 'callNo' },
    { title: '头像', type: 'img', width: '50px', index: 'avatar' },
    { title: '时间', type: 'date', index: 'updatedAt' },
    {
      title: '',
      buttons: [
        // { text: '查看', click: (item: any) => `/form/${item.id}` },
        // { text: '编辑', type: 'static', component: FormEditComponent, click: 'reload' },
      ],
    },
  ];

  constructor(private http: _HttpClient, private modal: ModalHelper) {}

  ngOnInit() {
    this.http.get('assets/tmp/city.json').subscribe((res: any) => {
      this.nzOptions = res;
    }),
      this.http.post('/rs/res/tree').subscribe((res: any) => {
        if (res.msg !== 'ok') {
          return;
        }
        this.nodes = res.data;
      });
  }

  add() {
    // this.modal
    //   .createStatic(FormEditComponent, { i: { id: 0 } })
    //   .subscribe(() => this.st.reload());
  }

  public onChanges(values: any): void {
    console.log(values, this.values);
  }
}
