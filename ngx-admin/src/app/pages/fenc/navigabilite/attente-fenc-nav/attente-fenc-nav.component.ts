import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Router } from '@angular/router';
import { SmartTableData } from '../../../../@core/data/smart-table';
import { FENC_data } from '../../list-fenc/FENC';
import { ButtonViewSmartTableComponent } from '../../../global-components/button-view-smart-table/button-view-smart-table.component';
import { AnomalieService } from '../../../../@core/Services/anomalie.service';

@Component({
  selector: 'ngx-attente-fenc-nav',
  templateUrl: './attente-fenc-nav.component.html',
  styleUrls: ['./attente-fenc-nav.component.scss']
})
export class AttenteFencNavComponent implements OnInit {
  anomalieBe:any

  constructor(private router:Router,private anomalieService:AnomalieService) {
    this.anomalieService.getAnomalieEnAttenteByService("nav").subscribe(data => {
      this.anomalieBe = data
      this.source.load(this.anomalieBe)
    })
  }

  settings = {
    actions: false,
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
      typeEcart: {
        title: 'l\'écart détecté',
        type: 'string',
      },
      standard: {
        title: 'Standard',
        type: 'string',
      },
      buttonImprime: {
        title: 'Actions',
        type: 'custom',
        renderComponent: ButtonViewSmartTableComponent,
        onComponentInitFunction(instance) {
          const buttonType = "OuvrirFENCNav"
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
    let data = event.data
    this.router.navigate(["/pages/FENC/tabs", data.idAnomalie ])
    console.log("clicked");
    console.log("this is event : ",event)
    console.log("this is event data : ",event.data)
  }

  handleCreation(event){
    console.log("add cliked")
    this.router.navigateByUrl("/pages/FENC/ajouterFENC")
  }

}

