import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent, STReq, STRes, STColumnTag } from '@delon/abc';
import { SFSchema } from '@delon/form';
import { type } from 'os';

const SUCCESSED: STColumnTag = {
  成功: { text: '成功', color: 'green' },
  失败: { text: '失败', color: 'red' },
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
    { title: '用户名', index: 'userId' },
    { title: '系统', index: 'sysName', sort: true },
    { title: '线程', index: 'threadName' },
    {
      title: '类型',
      index: 'type',
      filter: {
        menus: [
          { text: '异常日志', value: '异常日志' },
          { text: '业务日志', value: '业务日志' },
        ],
        fn: (filter: any, record: any) => record.type === filter.value,
      },
    },
    { title: '操作名称', index: 'name' },
    { title: 'IP地址', index: 'ip' },
    { title: '地址', index: 'address' },
    {
      title: '时间',
      type: 'date',
      index: 'createTime',
      sort: true,
      dateFormat: 'YYYY-MM-DD HH:mm:ss',
    },
    { title: '状态', index: 'success', type: 'tag', tag: SUCCESSED },
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
