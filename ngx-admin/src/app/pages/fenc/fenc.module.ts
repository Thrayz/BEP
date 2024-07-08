import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FENCRoutingModule } from './fenc-routing.module';
import { FENCComponent } from './fenc.component';
import { AjouterFencComponent } from './ajouter-fenc/ajouter-fenc.component';
import { ListFencComponent } from './list-fenc/list-fenc.component';
import { NbAccordionModule, NbActionsModule, NbButton, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule, NbListModule, NbRadioModule, NbRouteTabsetModule, NbSelectModule, NbStepperModule, NbTabsetModule, NbTreeGridModule, NbUserModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from '../tables/tables-routing.module';
import { DetailFencComponent } from './detail-fenc/detail-fenc.component';
import { FormsRoutingModule } from '../forms/forms-routing.module';
import { FormsModule, ReactiveFormsModule, FormsModule as ngFormsModule } from '@angular/forms';
import { FicheFencComponent } from './detail-fenc/fiche-fenc/fiche-fenc.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { CasAjoutComponent } from './signature-part/cas-ajout/cas-ajout.component';
import { AttenteFencQualiteComponent } from './qualiteProduit/attente-fenc-qualite/attente-fenc-qualite.component';
import { AttenteFencProductionComponent } from './production/attente-fenc-production/attente-fenc-production.component';
import { AjoutFencProductionComponent } from './production/ajout-fenc-production/ajout-fenc-production.component';
import { AttenteFencNavComponent } from './navigabilite/attente-fenc-nav/attente-fenc-nav.component';
import { AttenteFencMethodeComponent } from './methode/attente-fenc-methode/attente-fenc-methode.component';
import { AjoutFencMethodeComponent } from './methode/ajout-fenc-methode/ajout-fenc-methode.component';
import { ListFencOperationComponent } from './operation/list-fenc-operation/list-fenc-operation.component';
import { DetailFencOperationComponent } from './operation/detail-fenc-operation/detail-fenc-operation.component';
import { AjouterFencOperationComponent } from './operation/ajouter-fenc-operation/ajouter-fenc-operation.component';
import { ListFencAdminComponent } from './admin/list-fenc-admin/list-fenc-admin.component';
import { DetailFencAdminComponent } from './admin/detail-fenc-admin/detail-fenc-admin.component';
import { AjouterFencAdminComponent } from './admin/ajouter-fenc-admin/ajouter-fenc-admin.component';
import { AjoutFencNavComponent } from './navigabilite/ajout-fenc-nav/ajout-fenc-nav.component';
import { AjoutFencQualiteComponent } from './qualiteProduit/ajout-fenc-qualite/ajout-fenc-qualite.component';
import { DialogChoiceServiceComponent } from './operation/ajouter-fenc-operation/dialog-choice-service/dialog-choice-service.component';
import { SignatureButtonComponent } from '../global-components/signature-button/signature-button.component';
import { AjoutFencBeComponent } from './be/ajout-fenc-be/ajout-fenc-be.component';
import { AttenteFencBeComponent } from './be/attente-fenc-be/attente-fenc-be.component';
import { AttenteFencQualiteProgrammeComponent } from './qualiteProgramme/attente-fenc-qualite-programme/attente-fenc-qualite-programme.component';
import { AjoutFencQualiteProgrammeComponent } from './qualiteProgramme/ajout-fenc-qualite-programme/ajout-fenc-qualite-programme.component';
import { TabsDetailFencComponent } from './tabs-detail-fenc/tabs-detail-fenc.component';
import { UpdateFencAdminComponent } from './admin/update-fenc-admin/update-fenc-admin.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';


@NgModule({
  declarations: [
    FENCComponent,
    AjouterFencComponent,
    ListFencComponent,
    DetailFencComponent,
    FicheFencComponent,
    CasAjoutComponent,
    AttenteFencQualiteComponent,
    AttenteFencProductionComponent,
    AjoutFencProductionComponent,
    AttenteFencNavComponent,
    AttenteFencMethodeComponent,
    AjoutFencMethodeComponent,
    ListFencOperationComponent,
    DetailFencOperationComponent,
    AjouterFencOperationComponent,
    ListFencAdminComponent,
    DetailFencAdminComponent,
    AjouterFencAdminComponent,
    AjoutFencNavComponent,
    AjoutFencQualiteComponent,
    DialogChoiceServiceComponent,
    AjoutFencBeComponent,
    AttenteFencBeComponent,
    AttenteFencQualiteProgrammeComponent,
    AjoutFencQualiteProgrammeComponent,
    TabsDetailFencComponent,
    UpdateFencAdminComponent,
   
    
  ],
  imports: [
    CommonModule,
    FENCRoutingModule,
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
    ngFormsModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbCardModule,
    NbButtonModule,
    NbListModule,
    NbAccordionModule,
    NbUserModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule, 
    MatAutocompleteModule
  ]
})
export class FENCModule { }
