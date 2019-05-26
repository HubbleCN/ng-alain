import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-sys-account-laout',
  templateUrl: './layout.component.html',
})
export class SysAccountsLayoutComponent implements OnInit, OnDestroy {
  private router$: Subscription;
  tabs: any[] = [
    {
      key: 'user',
      tab: '普通用户',
    },
    {
      key: 'manager',
      tab: '管理员',
    },
  ];

  pos = 0;

  constructor(private router: Router, private http: _HttpClient, public msg: NzMessageService) {}

  private setActive() {
    const key = this.router.url.substr(this.router.url.lastIndexOf('/') + 1);
    const idx = this.tabs.findIndex(w => w.key === key);
    if (idx !== -1) this.pos = idx;
  }

  ngOnInit(): void {
    this.router$ = this.router.events
      .pipe(filter(e => e instanceof ActivationEnd))
      .subscribe(() => this.setActive());
    this.setActive();
  }

  to(item: any) {
    this.router.navigateByUrl(`/system/account/${item.key}`);
  }

  ngOnDestroy() {
    this.router$.unsubscribe();
  }
}
