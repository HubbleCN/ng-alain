import { Component, OnInit, ViewChild } from '@angular/core';
import { NzModalRef, NzMessageService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';
import { SFSchema, SFUISchema } from '@delon/form';

@Component({
  selector: 'app-sys-account-manager-edit',
  templateUrl: './edit.component.html',
})
export class SysAccountManagerEditComponent implements OnInit {
  record: any = {};
  i: any;
  schema: SFSchema = {
    properties: {
      id: { type: 'string', title: '编号' },
      username: { type: 'string', title: '用户名', minLength: 4, maxLength: 15, readOnly: this.i },
      mobile: { type: 'string', title: '手机号', minLength: 11, maxLength: 11},
      email: { type: 'string', title: '邮箱地址', format: 'email'},
      password: { type: 'string', title: '登录密码', maxLength: 20 },
    },
    required: ['username'],
  };
  ui: SFUISchema = {
    '*': {
      spanLabelFixed: 100,
      grid: { span: 12 },
    },
    $id: {
      widget: 'text',
    },
    $username: {
      widget: 'string',
      placeholder: '请输入用户名'
    },
    $password: {
      widget: 'string',
      type: 'password',
      placeholder: '默认密码是123123'
    },
  };

  constructor(
    private modal: NzModalRef,
    private msgSrv: NzMessageService,
    public http: _HttpClient,
  ) {}

  ngOnInit(): void {

  }

  save(value: any) {
    this.http.post(`/sys/account/manager/save`, value).subscribe((res: any) => {
      if (res.msg !== 'ok') {
        return;
      }
      this.msgSrv.success('保存成功');
      this.modal.close(true);
    });
  }

  close() {
    this.modal.destroy();
  }
}
