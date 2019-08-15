import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent, STReq, STRes, STColumnBadge } from '@delon/abc';
import { SFSchema } from '@delon/form';
import { SysAccountManagerEditComponent } from './edit/edit.component';
import { NzMessageService } from 'ng-zorro-antd';

const STATUS_BADGE: STColumnBadge = {
  NORMAL: { text: '正常', color: 'success' },
  LOCKED: { text: '锁定', color: 'error' },
  DISABLE: { text: '销号', color: 'default' },
};

@Component({
  selector: 'app-sys-account-manager',
  templateUrl: './manager.component.html',
})
export class SysAccountManagerComponent implements OnInit {
  url = `/sys/account/manager/list`;
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
      buttons: [{ text: '编辑', click: (item: any) => this.add(item) }],
    },
  ];

  // 自定义请求数据
  req: STReq = {
    method: 'post',
    reName: { pi: 'pageNum', ps: 'pageSize' },
    // params: { roleId: '0,1' },
    allInBody: true,
  };

  // 自定义响应数据处理
  res: STRes = {
    reName: { total: 'total', list: 'data' },
  };

  constructor(private http: _HttpClient, private modal: ModalHelper, public msg: NzMessageService) {}

  ngOnInit() {}

  add(manager?: any) {
    // this.modal
    //   .createStatic(SysAccountManagerEditComponent)
    //   .subscribe(() => this.st.reload());
    this.modal.static(SysAccountManagerEditComponent, manager ? { i: manager } : null).subscribe(() => {
      this.st.load();
    });
  }
}
