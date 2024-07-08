import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import { FENC_data } from './FENC';
import { Router } from '@angular/router';
import { ButtonViewSmartTableComponent } from '../../global-components/button-view-smart-table/button-view-smart-table.component';
import { Anomalie } from '../../../@core/Models/Anomalie';
import { AnomalieService } from '../../../@core/Services/anomalie.service';

@Component({
  selector: 'ngx-list-fenc',
  templateUrl: './list-fenc.component.html',
  styleUrls: ['./list-fenc.component.scss']
})
export class ListFencComponent implements OnInit {

  idAnomalie:number
  anomalie:Anomalie = new Anomalie()
  listAnomalie: Anomalie[]
  id:string

  
  constructor(private anomalieService:AnomalieService,private router:Router,private service: SmartTableData) {
    this.anomalieService.getAllAnomalie().subscribe(data => {
      this.listAnomalie = data
      this.source.load(this.listAnomalie);
    })
    
  }

  ngOnInit(): void {
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
