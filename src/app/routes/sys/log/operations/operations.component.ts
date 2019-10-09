import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent, STReq, STRes, STColumnTag, STColumnBadge } from '@delon/abc';
import { SFSchema } from '@delon/form';
import { type } from 'os';

const STATUS: STColumnTag = {
  '1': { text: '成功', color: 'green' },
  '0': { text: '失败', color: 'red' },
};

const TYPE_BADGE: STColumnBadge = {
  '0': { text: '默认', color: 'success' },
  '1': { text: '异常', color: 'error' },
};

@Component({
  selector: 'app-sys-log-operations',
  templateUrl: './operations.component.html',
})
export class SysLogOperationsComponent implements OnInit {
  url = `/sys/log/operations`;
  searchSchema: SFSchema = {
    properties: {
      userId: {
        type: 'string',
        title: '用户名',
      },
      name: {
        type: 'string',
        title: '操作名称',
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
    required: ['userId'],
  };
  @ViewChild('st') st: STComponent;
  columns: STColumn[] = [
    { title: '用户名', index: 'createUser' },
    { title: '系统', index: 'sysName', sort: true },
    { title: '线程', index: 'threadName' },
    {
      title: '类型',
      index: 'type',
      filter: {
        menus: [{ text: '其他', value: '0' }, { text: '异常', value: '1' }],
        fn: (filter: any, record: any) => record.type === filter.value,
      },
      type: 'badge',
      badge: TYPE_BADGE,
    },
    { title: '操作名称', index: 'name' },
    { title: 'IP地址', index: 'ip' },
    {
      title: '时间',
      type: 'date',
      index: 'createTime',
      sort: true,
      dateFormat: 'YYYY-MM-DD HH:mm:ss',
    },
    { title: '状态', index: 'status', type: 'tag', tag: STATUS },
    // {
    //   title: '',
    //   buttons: [
    //     // { text: '查看', click: (item: any) => `/form/${item.id}` },
    //     // { text: '编辑', type: 'static', component: FormEditComponent, click: 'reload' },
    //   ],
    // },
  ];

  // 自定义请求数据
  req: STReq = {
    method: 'post',
    reName: { pi: 'pageNum', ps: 'pageSize' },
    allInBody: true,
  };

  // 自定义响应数据处理
  res: STRes = {
    reName: { total: 'total', list: 'data' },
  };

  constructor(private http: _HttpClient, private modal: ModalHelper) {}

  ngOnInit() {}

  add() {
    // this.modal
    //   .createStatic(FormEditComponent, { i: { id: 0 } })
    //   .subscribe(() => this.st.reload());
  }
}
