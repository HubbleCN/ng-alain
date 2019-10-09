import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent, STReq, STRes } from '@delon/abc';
import { SFSchema } from '@delon/form';
import { NzTreeNodeOptions, NzFormatEmitEvent, NzTreeNode, NzMessageService, NzModalService } from 'ng-zorro-antd';
import { SysRoleEditComponent } from '../edit/edit.component';

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
    { title: '角色类型', index: 'name' },
    { title: '角色描述', index: 'description' },
    {
      title: '更多操作',
      width: '200px',
      className: 'text-center',
      buttons: [
        { text: '编辑', click: (item: any) => this.openEdit(item) },
        { text: '权限', click: (item: any) => this.loadPermissions(item) },
        { text: '删除', click: (item: any) => this.remove(item) },
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

  editable = false;
  role: any;

  constructor(
    private http: _HttpClient,
    private modal: ModalHelper,
    public msg: NzMessageService,
    private modalSrv: NzModalService,
  ) {}

  /**
   * 查询角色权限
   * @param item 角色
   */
  loadPermissions(item?: any) {
    this.role = item;
    this.http
      .post('/sys/role/permission/tree', {
        roleId: item ? item.id : null,
      })
      .subscribe((res: any) => {
        if (res instanceof Array) {
          this.nodes = res;
        }
      });
  }

  /**
   * 保存角色权限
   */
  savePermissions() {
    this.editable = false;
    const checkedNodeList: Array<NzTreeNode> = this.treeCom.getCheckedNodeList();
    console.log(checkedNodeList.map(i => i.key).join(','));
    this.http
      .post('/sys/role/permission/update', {
        id: this.role.id,
        resourceIds: checkedNodeList.map(i => i.key).join(','),
      })
      .subscribe((res: any) => {
        if (res instanceof Array) {
          this.nodes = res;
        }
      });
  }

  loadResources() {
    this.http.post('/sys/role/permission/reset').subscribe((res: any) => {
      if (res instanceof Array) {
        this.nodes = res;
        this.msg.success('成功加载资源节点');
      } else {
        this.msg.success('加载失败');
      }
    });
  }

  openEdit(record: any = {}) {
    this.modal.create(SysRoleEditComponent, { record }, { size: 'md' }).subscribe(res => {
      console.log(res);
      if (res) {
        this.st.reload();
      }
    });
  }

  ngOnInit() {
    this.loadPermissions();
  }

  add() {
    // this.modal
    //   .createStatic(FormEditComponent, { i: { id: 0 } })
    //   .subscribe(() => this.st.reload());
  }

  remove(record: any) {
    this.modalSrv.confirm({
      nzTitle: '确认删除？',
      nzOnOk: () => {
        this.msg.success('删除接口待添加!');
      },
    });
  }
}
