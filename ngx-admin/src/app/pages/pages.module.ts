import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { ButtonViewSmartTableComponent } from './global-components/button-view-smart-table/button-view-smart-table.component';
import { SignatureButtonComponent } from './global-components/signature-button/signature-button.component';
import { FlowComponent } from './flow/flow.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    NbButtonModule,
    NbCardModule
  ],
  declarations: [
    PagesComponent,
    ButtonViewSmartTableComponent,
    SignatureButtonComponent,
    FlowComponent
    
  ],
})
export class PagesModule {
}
