import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Router } from '@angular/router';
import { SmartTableData } from '../../../../@core/data/smart-table';
import { FENC_data } from '../../list-fenc/FENC';
import { AnomalieService } from '../../../../@core/Services/anomalie.service';
import { Anomalie } from '../../../../@core/Models/Anomalie';
import { NbWindowControlButtonsConfig, NbWindowService } from '@nebular/theme';


@Component({
  selector: 'ngx-list-fenc-admin',
  templateUrl: './list-fenc-admin.component.html',
  styleUrls: ['./list-fenc-admin.component.scss']
})
export class ListFencAdminComponent implements OnInit {

  listAnomalie:Anomalie[]
  idAnomalieSelectedToDelete:number
  @ViewChild('contentTemplate', { static: true }) contentTemplate: TemplateRef<any>;


  constructor(private windowService: NbWindowService,private anomalieService:AnomalieService,private router:Router,private service: SmartTableData) {
    
  }

  settings = {
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      // Update the onClick function
      onClick: (event, rowData) => {
        this.router.navigate(['/edit-details', rowData.id]); // Navigate to the new component
      },
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
    this.idAnomalieSelectedToDelete = event.data.idAnomalie
    this.openWindow(this.contentTemplate)
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

  openWindow(contentTemplate) {
    this.windowService.open(
      contentTemplate,
      {
        title: 'Confirmer votre choix',
        context: {
          text: 'Article Code :',
        },
        buttons:{
          minimize: false,
          maximize: false,
          fullScreen: false,
        }
      },
    );
  }

  handleGridSelected(event){
    let data = event.data;
    this.router.navigate(["/pages/FENC/tabs", data.idAnomalie ])
    console.log("clicked");
    console.log("this is event : ",event)
    console.log("this is event data : ",event.data)
  }

  handleCreation(event){
    console.log("add cliked")
    this.router.navigateByUrl("/pages/FENC/ajouterFENC")
  }

  confirmDelete(){
    this.anomalieService.deleteAnomalieById(this.idAnomalieSelectedToDelete).subscribe(data => {
      console.log("anomalie deleted with success !!!!")
    })
  }

  onEditConfirm(event): void {
    console.log("idAnomalie : ",event.data.idAnomalie)
  }

}
