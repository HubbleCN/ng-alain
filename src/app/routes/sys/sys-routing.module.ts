import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SysUserComponent } from './user/user.component';
import { SysLogComponent } from './log/log.component';
import { SysOperationsComponent } from './operations/operations.component';

const routes: Routes = [

  { path: 'user', component: SysUserComponent },
  { path: 'log', component: SysLogComponent },
  { path: 'operations', component: SysOperationsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SysRoutingModule { }
