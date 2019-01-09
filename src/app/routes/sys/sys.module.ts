import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { SysRoutingModule } from './sys-routing.module';
import { SysUserComponent } from './user/user.component';
import { SysUserEditComponent } from './user/edit/edit.component';
import { SysUserViewComponent } from './user/view/view.component';
import { SysLogComponent } from './log/log/log.component';
import { SysLogOperationsComponent } from './log/operations/operations.component';
import { SysLogLoggingComponent } from './log/logging/logging.component';

const COMPONENTS = [
  SysUserComponent,
  SysLogComponent,
  SysLogOperationsComponent,
];
const COMPONENTS_NOROUNT = [
  SysUserEditComponent,
  SysUserViewComponent,
  SysLogLoggingComponent,
];

@NgModule({
  imports: [SharedModule, SysRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
})
export class SysModule {}
