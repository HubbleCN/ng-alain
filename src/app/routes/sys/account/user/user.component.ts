import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent, STReq, STRes, STColumnBadge } from '@delon/abc';
import { SFSchema } from '@delon/form';
import { NzFormatEmitEvent, NzTreeNodeOptions } from 'ng-zorro-antd';
import { SysAccountUserEditComponent } from './edit/edit.component';

const STATUS_BADGE: STColumnBadge = {
  NORMAL: { text: '正常', color: 'success' },
  LOCKED: { text: '锁定', color: 'error' },
  DISABLE: { text: '销号', color: 'default' },
};

@Component({
  selector: 'app-sys-account-user',
  templateUrl: './user.component.html',
  styles: [
    `
      .ant-cascader-picker {
        width: 300px;
      }
    `,
  ],
})
export class SysAccountUserComponent implements OnInit {
  /** init data */
  public nzOptions = [];

  /** ngModel value */
  public values: any[] = null;

  @ViewChild('treeCom') treeCom;

  nodes: NzTreeNodeOptions[] = [];

  nzClick(event: NzFormatEmitEvent): void {
    console.log(event, event.selectedKeys, event.keys, event.nodes, this.treeCom.getSelectedNodeList());
  }

  nzCheck(event: NzFormatEmitEvent): void {
    console.log(event, event.checkedKeys, event.keys, event.nodes);
  }

  // nzSelectedKeys change
  nzSelect(keys: string[]): void {
    console.log(keys, this.treeCom.getSelectedNodeList());
  }

  url = `/sys/account/user/list`;
  searchSchema: SFSchema = {
    properties: {
      userId: {
        type: 'string',
        title: '用户名',
      },
      beginDate: {
        title: '起止日期',
        type: 'string',
        ui: { widget: 'date', end: 'endDate', format: 'YYYY-MM-DD' },
      },
      endDate: {
        type: 'string',
        format: 'YYYY-MM-DD',
        ui: { widget: 'date', end: 'endDate', format: 'YYYY-MM-DD' },
      },
    },
    // required: ['userId'],
  };
  @ViewChild('st') st: STComponent;

  doSearch(event: any) {
    this.st.reset(Object.assign(event, this.req.params));
  }

  columns: STColumn[] = [
    { title: '序号', index: 'id' },
    { title: '用户名', index: 'username' },
    {
      title: '手机号码',
      index: 'phone',
      default: '-',
    },
    {
      title: '邮箱',
      index: 'email',
      default: '-',
    },
    {
      title: '用户昵称',
      index: 'nickname',
      default: '-',
    },
    {
      title: '注册时间',
      type: 'date',
      index: 'createTime',
      sort: true,
      dateFormat: 'YYYY-MM-DD HH:mm:ss',
    },
    {
      title: '用户状态',
      index: 'status',
      type: 'badge',
      badge: STATUS_BADGE,
    },
    {
      title: '操作区',
      buttons: [
        { text: '查看', click: (item: any) => `/form/${item.id}` },
        // { text: '编辑', type: 'static', component: FormEditComponent, click: 'reload' },
      ],
    },
  ];

  // 自定义请求数据
  req: STReq = {
    method: 'post',
    reName: { pi: 'pageNum', ps: 'pageSize' },
    // params: { roleId: '2' },
    allInBody: true,
  };

  // 自定义响应数据处理
  res: STRes = {
    reName: { total: 'total', list: 'data' },
  };

  constructor(private http: _HttpClient, private modal: ModalHelper) {}

  ngOnInit() {
    this.http.get('assets/tmp/city.json').subscribe((res: any) => {
      this.nzOptions = res;
    });
  }

  add() {
    this.modal.createStatic(SysAccountUserEditComponent, { i: { id: 0 } }).subscribe(() => this.st.reload());
  }

  public onChanges(values: any): void {
    console.log(values, this.values);
  }
}
