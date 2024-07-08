import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormsModule as ngFormsModule } from '@angular/forms';


import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserManagementComponent } from './user-management.component';
import { ListUserComponent } from './list-user/list-user.component';
import { AjoutUserComponent } from './ajout-user/ajout-user.component';
import { NbAccordionModule, NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbListModule, NbRouteTabsetModule, NbSelectModule, NbTabsetModule, NbTreeGridModule, NbUserModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule } from '../tables/tables-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsRoutingModule } from '../forms/forms-routing.module';


@NgModule({
  declarations: [
    UserManagementComponent,
    ListUserComponent,
    AjoutUserComponent,
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
    FormsRoutingModule,
    NbSelectModule,
    ngFormsModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbCardModule,
    NbButtonModule,
    NbListModule,
    NbAccordionModule,
    NbUserModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class UserManagementModule { }
