import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FENCComponent } from './fenc.component';
import { FicheFencComponent } from './detail-fenc/fiche-fenc/fiche-fenc.component';
import { AttenteFencMethodeComponent } from './methode/attente-fenc-methode/attente-fenc-methode.component';
import { AjouterFencOperationComponent } from './operation/ajouter-fenc-operation/ajouter-fenc-operation.component';
import { AttenteFencQualiteComponent } from './qualiteProduit/attente-fenc-qualite/attente-fenc-qualite.component';
import { AttenteFencNavComponent } from './navigabilite/attente-fenc-nav/attente-fenc-nav.component';
import { DetailFencOperationComponent } from './operation/detail-fenc-operation/detail-fenc-operation.component';
import { ListFencOperationComponent } from './operation/list-fenc-operation/list-fenc-operation.component';
import { ListFencAdminComponent } from './admin/list-fenc-admin/list-fenc-admin.component';
import { DetailFencAdminComponent } from './admin/detail-fenc-admin/detail-fenc-admin.component';
import { AjouterFencAdminComponent } from './admin/ajouter-fenc-admin/ajouter-fenc-admin.component';
import { AttenteFencProductionComponent } from './production/attente-fenc-production/attente-fenc-production.component';
import { AjoutFencProductionComponent } from './production/ajout-fenc-production/ajout-fenc-production.component';
import { DetailFencComponent } from './detail-fenc/detail-fenc.component';
import { AjouterFencComponent } from './ajouter-fenc/ajouter-fenc.component';
import { ListFencComponent } from './list-fenc/list-fenc.component';
import { AjoutFencMethodeComponent } from './methode/ajout-fenc-methode/ajout-fenc-methode.component';
import { AjoutFencBeComponent } from './be/ajout-fenc-be/ajout-fenc-be.component';
import { AttenteFencBeComponent } from './be/attente-fenc-be/attente-fenc-be.component';
import { AjoutFencQualiteComponent } from './qualiteProduit/ajout-fenc-qualite/ajout-fenc-qualite.component';
import { AjoutFencNavComponent } from './navigabilite/ajout-fenc-nav/ajout-fenc-nav.component';
import { HideIdResolver } from '../../hide-id.resolver';
import { TabsDetailFencComponent } from './tabs-detail-fenc/tabs-detail-fenc.component';
import { DetailDreComponent } from '../dre/detail-dre/detail-dre.component';
import { FlowComponent } from '../flow/flow.component';
import { UpdateFencAdminComponent } from './admin/update-fenc-admin/update-fenc-admin.component';

const routes: Routes = [{
  path: '',
  component: FENCComponent,
  children: [
    {
      path: 'listFENC',
      component: ListFencComponent,
    },
    {
      path: 'ajouterFENC',
      component: AjouterFencComponent,
    },
    {
      path: 'detailFENC/:id',
      component: DetailFencComponent,
    },
    {
      path: 'ficheFENC',
      component: FicheFencComponent,
    },
    {
      path: 'tabs/:id',
      component: TabsDetailFencComponent,
      children: [
        {
          path: 'FENC/:id',
          component: DetailFencComponent,
        },
        {
          path: 'DRE/:id',
          component: DetailDreComponent,
        },
        {
          path: 'flow/:id',
          component: FlowComponent,
        },

      ],
    },
    {
      
      path: 'methode',
      children: [
        {
          path: 'ajoutFENC/:id',
          component: AjoutFencMethodeComponent,
        },
        {
          path: 'attenteFENC',
          component: AttenteFencMethodeComponent,
        },
      ],
    },
    {
      path: 'be',
      children: [
        {
          path: 'ajoutFENC/:id',
          component: AjoutFencBeComponent,
        },
        {
          path: 'attenteFENC',
          component: AttenteFencBeComponent,
        },
      ],
    },
    {
      path: 'operation',
      children: [
        {
          path: 'listFENC',
          component: ListFencOperationComponent,
        },
        {
          path: 'ajouterFENC',
          component: AjouterFencOperationComponent,
        },
        {
          path: 'detailFENC',
          component: DetailFencOperationComponent,
        },
      ],
    },
    {
      path: 'qualiteProduit',
      children: [
        {
          path: 'ajoutFENC/:id',
          component: AjoutFencQualiteComponent,
        },
        {
          path: 'attenteFENC',
          component: AttenteFencQualiteComponent,
        },
      ],
    },
    {
      path: 'qualiteProgramme',
      children: [
        {
          path: 'ajoutFENC/:id',
          component: AjoutFencQualiteComponent,
        },
        {
          path: 'attenteFENC',
          component: AttenteFencQualiteComponent,
        },
      ],
    },
    {
      path: 'navigabilite',
      children: [
        {
          path: 'attenteFENC',
          component: AttenteFencNavComponent,
        },
        {
          path: 'ajoutFENC/:id',
          component: AjoutFencNavComponent,
        },
      ],
    },
    {
      path: 'production',
      children: [
        {
          path:'attenteFENC',
          component:AttenteFencProductionComponent,
        },
        {
          path: 'ajoutFENC/:id',
          component: AjoutFencProductionComponent,
        },
      ],
    },
    {
      path: 'admin',
      children: [
        {
          path: 'listFENC',
          component: ListFencAdminComponent,
        },
        {
          path: 'ajoutFENC',
          component: AjouterFencAdminComponent,
        },
        {
          path: 'detailFENC',
          component: DetailFencAdminComponent,
        },
        {
          path: 'updateFENC',
          component: UpdateFencAdminComponent,
        },
      ],
    },

  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FENCRoutingModule { }
