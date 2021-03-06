import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent, STReq, STRes, STColumnTag } from '@delon/abc';
import { SFSchema } from '@delon/form';

const LOG_TYPE: STColumnTag = {
  '1': { text: '登录成功', color: 'green' },
  '2': { text: '登录失败', color: 'red' },
  '3': { text: '退出登录', color: 'blue' },
};

@Component({
  selector: 'app-sys-log-logging',
  templateUrl: './logging.component.html',
})
export class SysLogLoggingComponent implements OnInit {
  url = `/sys/log/list`;
  searchSchema: SFSchema = {
    properties: {
      userId: {
        type: 'string',
        title: '用户ID',
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
  };
  @ViewChild('st') st: STComponent;
  columns: STColumn[] = [
    { title: '用户ID', index: 'createUser' },
    { title: '系统', index: 'sysName', sort: true },
    { title: '线程', index: 'threadName' },
    { title: 'IP地址', index: 'ip' },
    {
      title: '时间',
      type: 'date',
      index: 'createTime',
      sort: true,
      dateFormat: 'YYYY-MM-DD HH:mm:ss',
    },
    { title: '信息', index: 'message' },
    {
      title: '类型',
      index: 'type',
      type: 'tag',
      tag: LOG_TYPE,
      filter: {
        menus: [
          { text: '登录成功', value: '登录成功' },
          { text: '登录失败', value: '登录失败' },
          { text: '退出登录', value: '退出登录' },
        ],
        fn: (filter: any, record: any) => record.type === filter.value,
      },
    },
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

  ngOnInit() {
    // this.http.post(`/sys/log/list`).subscribe(res => console.log(res));
  }

  add() {
    // this.modal
    //   .createStatic(FormEditComponent, { i: { id: 0 } })
    //   .subscribe(() => this.st.reload());
  }
}
