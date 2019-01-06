import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent, STReq, STRes, STColumnTag } from '@delon/abc';
import { SFSchema } from '@delon/form';

const LOG_TYPE: STColumnTag = {
  登录成功: { text: '登录成功', color: 'green' },
  登录失败: { text: '登录失败', color: 'red' },
  退出登录: { text: '退出登录', color: '' },
};

@Component({
  selector: 'app-sys-log',
  templateUrl: './log.component.html',
})
export class SysLogComponent implements OnInit {
  url = `/sys/log/list`;
  searchSchema: SFSchema = {
    properties: {
      userId: {
        type: 'string',
        title: '用户ID',
      },
    },
  };
  @ViewChild('st') st: STComponent;
  columns: STColumn[] = [
    { title: '用户ID', index: 'userId' },
    { title: 'IP地址', index: 'ip' },
    { title: '地址', index: 'address' },
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
    {
      title: '',
      buttons: [
        // { text: '查看', click: (item: any) => `/form/${item.id}` },
        // { text: '编辑', type: 'static', component: FormEditComponent, click: 'reload' },
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
