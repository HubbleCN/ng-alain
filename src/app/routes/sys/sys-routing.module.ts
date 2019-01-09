import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SysUserComponent } from './user/user.component';
import { SysLogComponent } from './log/log/log.component';
import { SysLogOperationsComponent } from './log/operations/operations.component';
import { SysLogLoggingComponent } from './log/logging/logging.component';

const routes: Routes = [
  { path: 'user', component: SysUserComponent },
  {
    path: 'log',
    children: [
      {
        path: '',
        component: SysLogComponent,
        children: [
          { path: 'logging', component: SysLogLoggingComponent },
          { path: 'operations', component: SysLogOperationsComponent },
        ],
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SysRoutingModule {}
