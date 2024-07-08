import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DREComponent } from './dre.component';
import { ListDREComponent } from './list-dre/list-dre.component';
import { FENCAttenteComponent } from './fencattente/fencattente.component';
import { FicheDreComponent } from './list-dre/fiche-dre/fiche-dre.component';
import { AjoutDREComponent } from './ajout-dre/ajout-dre.component';
import { AttenteDreBeComponent } from './be/attente-dre-be/attente-dre-be.component';
import { AjoutDreMethodeComponent } from './methode/ajout-dre-methode/ajout-dre-methode.component';
import { AttenteDreMethodeComponent } from './methode/attente-dre-methode/attente-dre-methode.component';
import { AjoutDreBeComponent } from './be/ajout-dre-be/ajout-dre-be.component';
import { AttenteDreQualiteComponent } from './qualite/attente-dre-qualite/attente-dre-qualite.component';
import { AjoutDreQualiteComponent } from './qualite/ajout-dre-qualite/ajout-dre-qualite.component';

const routes: Routes = [{
  path: '',
  component: DREComponent,
  children: [
    {
      path: 'listDRE',
      component: ListDREComponent,
    },
    {
      path: 'listFENC',
      component: FENCAttenteComponent,
    },
    {
      path:'ficheDRE',
      component:FicheDreComponent
    },
    {
      path:'ajoutDRE',
      component:AjoutDREComponent
    },
    {
      
      path: 'methode',
      children: [
        {
          path: 'attenteDRE',
          component: AttenteDreMethodeComponent,
        },
        {
          path: 'ajoutDRE/:id',
          component: AjoutDreMethodeComponent,
        },
      ],
    },
    {
      
      path: 'be',
      children: [
        {
          path: 'attenteDRE',
          component: AttenteDreBeComponent,
        },
        {
          path: 'ajoutDRE/:id',
          component: AjoutDreBeComponent,
        },
      ],
    },
    {
      
      path: 'qualite',
      children: [
        {
          path: 'attenteDRE',
          component: AttenteDreQualiteComponent,
        },
        {
          path: 'ajoutDRE/:id',
          component: AjoutDreQualiteComponent,
        },
      ],
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DRERoutingModule { }
