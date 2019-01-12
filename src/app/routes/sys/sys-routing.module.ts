import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SysLogLayoutComponent } from './log/layout/layout.component';
import { SysLogOperationsComponent } from './log/operations/operations.component';
import { SysLogLoggingComponent } from './log/logging/logging.component';
import { SysAccountsLayoutComponent } from './account/layout/layout.component';
import { SysAccountUserComponent } from './account/user/user.component';
import { SysAccountManagerComponent } from './account/manager/manager.component';
import { SysRoleRoleComponent } from './role/role/role.component';

const routes: Routes = [
  { path: 'user', component: SysAccountUserComponent },
  {
    path: 'log',
    children: [
      {
        path: '',
        component: SysLogLayoutComponent,
        children: [
          { path: 'logging', component: SysLogLoggingComponent },
          { path: 'operations', component: SysLogOperationsComponent },
        ],
      }
    ],
  },
  {
    path: 'account',
    children: [
      {
        path: '',
        component: SysAccountsLayoutComponent,
        children: [
          { path: 'user', component: SysAccountUserComponent },
          { path: 'manager', component: SysAccountManagerComponent },
        ],
      },
    ],
  },
  { path: 'role', component: SysRoleRoleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SysRoutingModule {}
