import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { SysRoutingModule } from './sys-routing.module';
import { SysUserComponent } from './user/user.component';
import { SysUserEditComponent } from './user/edit/edit.component';
import { SysUserViewComponent } from './user/view/view.component';
import { SysLogComponent } from './log/log.component';
import { SysOperationsComponent } from './operations/operations.component';

const COMPONENTS = [SysUserComponent, SysLogComponent,
  SysOperationsComponent];
const COMPONENTS_NOROUNT = [SysUserEditComponent, SysUserViewComponent];

@NgModule({
  imports: [SharedModule, SysRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
})
export class SysModule {}
