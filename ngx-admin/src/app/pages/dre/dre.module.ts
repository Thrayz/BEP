import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DRERoutingModule } from './dre-routing.module';
import { DREComponent } from './dre.component';
import { FENCAttenteComponent } from './fencattente/fencattente.component';
import { ListDREComponent } from './list-dre/list-dre.component';
import { NbAccordionModule, NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule, NbListModule, NbRadioModule, NbRouteTabsetModule, NbSelectModule, NbStepperModule, NbTabsetModule, NbTreeGridModule, NbUserModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule } from '../tables/tables-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsRoutingModule } from '../forms/forms-routing.module';
import { FormsModule, ReactiveFormsModule, FormsModule as ngFormsModule } from '@angular/forms';
import { FicheDreComponent } from './list-dre/fiche-dre/fiche-dre.component';
import { AjoutDREComponent } from './ajout-dre/ajout-dre.component';
import { AjoutDreMethodeComponent } from './methode/ajout-dre-methode/ajout-dre-methode.component';
import { AttenteDreMethodeComponent } from './methode/attente-dre-methode/attente-dre-methode.component';
import { AttenteDreQualiteComponent } from './qualite/attente-dre-qualite/attente-dre-qualite.component';
import { AjoutDreQualiteComponent } from './qualite/ajout-dre-qualite/ajout-dre-qualite.component';
import { AjoutDreBeComponent } from './be/ajout-dre-be/ajout-dre-be.component';
import { AttenteDreBeComponent } from './be/attente-dre-be/attente-dre-be.component';
import { DetailDreComponent } from './detail-dre/detail-dre.component';



@NgModule({
  declarations: [
    DREComponent,
    FENCAttenteComponent,
    ListDREComponent,
    FicheDreComponent,
    AjoutDREComponent,
    AjoutDreMethodeComponent,
    AttenteDreMethodeComponent,
    AttenteDreQualiteComponent,
    AjoutDreQualiteComponent,
    AjoutDreBeComponent,
    AttenteDreBeComponent,
    DetailDreComponent
  ],
  imports: [
    CommonModule,
    DRERoutingModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    TablesRoutingModule,
    NbCheckboxModule,
    Ng2SmartTableModule,
    NbActionsModule,
    NbRadioModule,
    NbDatepickerModule,
    FormsRoutingModule,
    NbSelectModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbCardModule,
    NbButtonModule,
    NbListModule,
    NbAccordionModule,
    NbUserModule,
    ngFormsModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class DREModule { }
