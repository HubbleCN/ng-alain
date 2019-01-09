import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { SysRoutingModule } from './sys-routing.module';
import { SysAccountUserComponent } from './account/user/user.component';
import { SysAccountUserEditComponent } from './account/user/edit/edit.component';
import { SysAccountUserViewComponent } from './account/user/view/view.component';
import { SysLogLayoutComponent } from './log/layout/layout.component';
import { SysLogOperationsComponent } from './log/operations/operations.component';
import { SysLogLoggingComponent } from './log/logging/logging.component';
import { SysAccountManagerComponent } from './account/manager/manager.component';
import { SysAccountManagerEditComponent } from './account/manager/edit/edit.component';
import { SysAccountManagerViewComponent } from './account/manager/view/view.component';
import { SysAccountsLayoutComponent } from './account/layout/layout.component';

const COMPONENTS = [
  SysLogLayoutComponent,
  SysLogLoggingComponent,
  SysLogOperationsComponent,
  SysAccountsLayoutComponent,
  SysAccountManagerComponent,
  SysAccountUserComponent,
];
const COMPONENTS_NOROUNT = [
  SysAccountUserEditComponent,
  SysAccountUserViewComponent,
  SysAccountManagerEditComponent,
  SysAccountManagerViewComponent];

@NgModule({
  imports: [SharedModule, SysRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
})
export class SysModule {}
