import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Router } from '@angular/router';
import { SmartTableData } from '../../../../@core/data/smart-table';
import { FENC_data } from '../../list-fenc/FENC';
import { AnomalieService } from '../../../../@core/Services/anomalie.service';
import { Anomalie } from '../../../../@core/Models/Anomalie';


@Component({
  selector: 'ngx-list-fenc-operation',
  templateUrl: './list-fenc-operation.component.html',
  styleUrls: ['./list-fenc-operation.component.scss']
})
export class ListFencOperationComponent implements OnInit {

  listAnomalie:Anomalie[]

  constructor(private anomalieService:AnomalieService,private router:Router,private service: SmartTableData) {
    let data = this.listAnomalie
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

  ngOnInit(): void {
    this.loadData()
  }

  loadData(){
    this.anomalieService.getAllAnomalie().subscribe(data => {
      this.listAnomalie = data
      this.source.load(data);
    })
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