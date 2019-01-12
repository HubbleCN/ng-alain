import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent, STReq, STRes } from '@delon/abc';
import { SFSchema } from '@delon/form';
import { NzTreeNodeOptions, NzFormatEmitEvent } from 'ng-zorro-antd';

@Component({
  selector: 'app-sys-role',
  templateUrl: './role.component.html',
})
export class SysRoleRoleComponent implements OnInit {
  url = `/sys/role/list`;

  @ViewChild('st') st: STComponent;
  // id: 0;
  // isValid: '1';
  // resourceIds: '0';
  // roleDesc: '超级管理员';
  // roleName: 'admin';
  columns: STColumn[] = [
    { title: '编号', index: 'id' },
    { title: '角色类型', index: 'roleName' },
    { title: '角色描述', index: 'roleDesc' },
    {
      title: '更多操作',
      width: '200px',
      className: 'text-center',
      buttons: [
        { text: '权限详情', click: (item: any) => this.loadPermissions(item) },
        // { text: '重新分配', click: (item: any) => `/form/${item.id}` },
      ],
    },
  ];

  // 自定义请求数据
  req: STReq = {
    method: 'post',
    reName: { pi: 'pageNum', ps: 'pageSize' },
    allInBody: true,
  };

  // 自定义响应数据处理
  res: STRes = {
    reName: { list: 'data' },
  };

  /**
   * 资源节点树相关
   */
  @ViewChild('treeCom') treeCom;

  nodes: NzTreeNodeOptions[];

  role: any;

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

  loadPermissions(item?: any) {
    this.role = item;
    this.http.post('/sys/role/resource/tree', {
        roleId: item ? item.id : null,
      }).subscribe((res: any) => {
        if (res instanceof Array) {
          this.nodes = res;
        }
      });
  }

  constructor(private http: _HttpClient, private modal: ModalHelper) {}

  ngOnInit() {
    this.loadPermissions();
  }

  add() {
    // this.modal
    //   .createStatic(FormEditComponent, { i: { id: 0 } })
    //   .subscribe(() => this.st.reload());
  }
}
