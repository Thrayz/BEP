import { Component } from '@angular/core';

import { MENU_ITEMS,MENU_ADMIN,MENU_Operation,MENU_Methode,MENU_NAV,MENU_Production, MENU_QUALITE_PRODUIT, MENU_QUALITE_PROGRAMME, MENU_BE } from './pages-menu';
import { TokenStorageService } from '../@core/Services/token-storage.service';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {

  menu : NbMenuItem[]

  constructor(private tokenStorage:TokenStorageService){
    if(this.tokenStorage.getUser().serviceStatus == "ADMIN"){
      this.menu = MENU_ADMIN
    }
    else if(this.tokenStorage.getUser().serviceStatus == "NAVIGATION"){
      this.menu = MENU_NAV
    }
    else if(this.tokenStorage.getUser().serviceStatus == "PRODUCTION"){
      this.menu = MENU_Production
    }
    else if(this.tokenStorage.getUser().serviceStatus == "METHODE"){
      this.menu = MENU_Methode
    }
    else if(this.tokenStorage.getUser().serviceStatus == "QUALITE_PRODUIT"){
      this.menu = MENU_QUALITE_PRODUIT
    }
    else if(this.tokenStorage.getUser().serviceStatus == "QUALITE_PROGRAMME"){
      this.menu = MENU_QUALITE_PROGRAMME
    }
    else if(this.tokenStorage.getUser().serviceStatus == "OPERATION"){
      this.menu = MENU_Operation
    }
    else if(this.tokenStorage.getUser().serviceStatus == "BE"){
      this.menu = MENU_BE
    }
    else {
      this.menu = MENU_ITEMS
    }
  }
  
}
