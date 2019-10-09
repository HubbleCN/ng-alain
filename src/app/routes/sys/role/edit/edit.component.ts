import { Component, OnInit, ViewChild } from '@angular/core';
import { NzModalRef, NzMessageService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';
import { SFSchema, SFUISchema } from '@delon/form';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'sys-role-edit',
  templateUrl: './edit.component.html',
})
export class SysRoleEditComponent implements OnInit {
  record: any = {};
  i: any;
  schema: SFSchema = {
    properties: {
      id: { type: 'string', title: '角色编号', readOnly: true },
      name: { type: 'string', title: '角色名称', maxLength: 64 },
      pid: { type: 'number', title: '父级角色' },
      sort: { type: 'number', title: '排序编号', minimum: 0 },
      description: { type: 'string', title: '角色描述', maxLength: 140 },
      creatTime: { type: 'string', title: '创建时间', ui: { widget: 'date', hidden: true } },
      updateTime: { type: 'string', title: '更新时间', ui: { widget: 'date', hidden: true } },
      creatUser: { type: 'string', title: '创建人', ui: { hidden: true } },
      updateUser: { type: 'string', title: '更新人', ui: { hidden: true } },
    },
    required: ['id', 'name', 'description'],
  };
  ui: SFUISchema = {
    '*': {
      spanLabelFixed: 100,
      grid: { span: 12 },
    },
    $id: {
      widget: 'text',
    },
    $sort: {
      widget: 'number',
    },
    $description: {
      widget: 'textarea',
      grid: { span: 24 },
    },
  };

  constructor(private modal: NzModalRef, private msgSrv: NzMessageService, public http: _HttpClient) {}

  ngOnInit(): void {
    if (this.record.id > 0)
      this.http.get(`/sys/role/${this.record.id}`).subscribe(res => {
        console.log(res);
        if (res.msg !== 'ok') return;
        this.i = res.data;
      });
  }

  save(value: any) {
    if (!value) return;
    this.http.post(`/sys/role/reset`, value).subscribe(res => {
      this.modal.close(true);
    });
  }

  close() {
    this.modal.destroy();
  }
}
