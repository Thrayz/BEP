import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SmartTableData } from '../../../@core/data/smart-table';
import { Router } from '@angular/router';
import { FENCAttente } from './FENCAttente'
import { LocalDataSource, ViewCell } from 'ng2-smart-table';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';
import { ButtonViewSmartTableComponent } from '../../global-components/button-view-smart-table/button-view-smart-table.component';


@Component({
  selector: 'ngx-fencattente',
  templateUrl: './fencattente.component.html',
  styleUrls: ['./fencattente.component.scss']
})
export class FENCAttenteComponent implements OnInit {

  constructor(private router:Router,private service: SmartTableData) {
    const data = FENCAttente
    this.source.load(data);
  }

  settings = {
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    actions: {
      add: false,
      position : 'right'
    },
    columns: {
      codeArticle: {
        title: 'Code Article M3',
        type: 'string',
      },
      partNumber: {
        title: 'Part Number',
        type: 'string',
      },
      designation: {
        title: 'Désignation',
        type: 'string',
      },
      dateDetection: {
        title: 'Date détection',
        type: 'date',
      },
      ecart_detecte: {
        title: 'l\'écart détecté',
        type: 'string',
      },
      standard: {
        title: 'Standard',
        type: 'string',
      },
      button: {
        title: '',
        type: 'custom',
        renderComponent: ButtonViewSmartTableComponent,
        onComponentInitFunction(instance) {
          const buttonType = "redigerDRE"
          instance.buttonType = buttonType;
          instance.save.subscribe(row => {
            alert(`${row.name} saved!`)
          });
        },
        filter:false
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  ngOnInit(): void {
  }

  handleGridSelected(event){
    let data = JSON.stringify(event.data);
    this.router.navigate(["/pages/FENC/detailFENC", { 'data': data }])
    console.log("clicked");
    console.log("this is event : ",event)
    console.log("this is event data : ",event.data)
  }

  handleCreation(event){
    console.log("add cliked")
    this.router.navigateByUrl("/pages/FENC/ajouterFENC")
  }

}