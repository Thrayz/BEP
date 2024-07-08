import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Router } from '@angular/router';
import { SmartTableData } from '../../../../@core/data/smart-table';
import { FENC_data } from '../../list-fenc/FENC';
import { ButtonViewSmartTableComponent } from '../../../global-components/button-view-smart-table/button-view-smart-table.component';
import { AnomalieService } from '../../../../@core/Services/anomalie.service';

@Component({
  selector: 'ngx-attente-fenc-qualite',
  templateUrl: './attente-fenc-qualite.component.html',
  styleUrls: ['./attente-fenc-qualite.component.scss']
})

export class AttenteFencQualiteComponent implements OnInit {

  anomalieQualiteProduit:any

  constructor(private router:Router,private service: SmartTableData,private anomalieService:AnomalieService) {
    console.log(this.source)
    console.log("count source : ",this.source.count())
    /*this.anomalieService.getAllAnomalie().subscribe(data => {
      let anomalieWithoutStatus = data.filter(anomalie => (!anomalie.nonConformite && !anomalie.securisation))
      this.source.load(anomalieWithoutStatus)
    })*/
    this.anomalieService.getAnomalieEnAttenteByService("qualiteproduit").subscribe(data => {
      this.anomalieQualiteProduit = data
      this.source.load(this.anomalieQualiteProduit)
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
      stateColumn: {
        title: 'Etat FENC',
        type: 'html',
        valuePrepareFunction: (cell, row) => {
          // Define your logic here to determine the state based on row data
          const state = row.nonConformite == null ? 'Attente Status' : 'Attente Signature';
          return `<span class="text-danger">${state}</span>`;
        },
      },
      buttonImprime: {
        title: 'Actions',
        type: 'custom',
        renderComponent: ButtonViewSmartTableComponent,
        onComponentInitFunction(instance) {
          const buttonType = "OuvrirFENCQualite"
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

