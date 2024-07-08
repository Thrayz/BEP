import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatDatepicker } from '@angular/material/datepicker';
import { DialogChoiceServiceComponent } from '../../operation/ajouter-fenc-operation/dialog-choice-service/dialog-choice-service.component';
import { NbDialogService } from '@nebular/theme';
import { AnomalieService } from '../../../../@core/Services/anomalie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-ajouter-fenc-admin',
  templateUrl: './ajouter-fenc-admin.component.html',
  styleUrls: ['./ajouter-fenc-admin.component.scss']
})
export class AjouterFencAdminComponent implements OnInit {
  nonConforme : string = "false"
  securisation : string = "0"
  securisationButton : string = "false"
  formFENC : FormGroup;

  qualiteNom : string;
  selectedDate : Date;
  showDatePicker:boolean;

  constructor(private router:Router,private anomalieService:AnomalieService,private dialogService: NbDialogService,public dialog: MatDialog) { }

  ngOnInit(): void {

    this.formFENC = new FormGroup({
      codeArticle : new FormControl('',Validators.required),
      partNumber : new FormControl('',Validators.required),
      designation : new FormControl('',Validators.required),
      dateDetection : new FormControl('',Validators.required),
      lieuDetection : new FormControl('',Validators.required),
      quiDetecter : new FormControl('',Validators.required),
      sn : new FormControl('',Validators.required),
      of : new FormControl('',Validators.required),
      quantite : new FormControl('',Validators.required),
      typeEcart: new FormControl('',Validators.required),
      standard : new FormControl('',Validators.required),
      zone : new FormControl('',Validators.required),
      typeDetection : new FormControl('',Validators.required),
      statusService : new FormControl('',Validators.required),
    })

  }

  mouseClickAlert(event){
    const editedText = event.target.textContent;
    console.log("text",editedText)
  }

  onFocus() {
    console.log("focus")
    const contentNom = document.getElementById('content-nom');
    contentNom.innerHTML = '';
    contentNom.style.color = 'black';
  }

  onBlur() {
    const contentNom = document.getElementById('content-nom');
    console.log(contentNom)
  }

  openDatePicker(datePicker: MatDatepicker<Date>) {
    
    this.showDatePicker = true;
    setTimeout(() => {
      datePicker.open();
      console.log("here")
    }, 200);
    
    
    const contentDate = document.getElementById('content-date');
    contentDate.innerHTML = '';
  }

  dateIconClickHandler(){
    
  }

  getDataSignatureQualite(data :any){

    console.log("nom-qualité : ",data.nom,"date-qualité : ",data.date)

  }

  getDataSignatureProduction(data :any){

    console.log("nom-production : ",data.nom,"date-production : ",data.date)

  }

  getDataSignatureNavigabilite(data :any){

  }

  saveAnomalie(){
    console.log("form values : ",this.formFENC.value)
    /*this.dialogService.open(DialogChoiceServiceComponent).onClose.subscribe((service:string) => {
      if(service){
        this.formFENC.get("statusService").setValue(service);
        if(this.formFENC.valid){
          this.anomalieService.addAnomalie(this.formFENC.value).subscribe(data => {
            console.log("data from add : ",data)
            this.router.navigateByUrl("/pages/FENC/operation/listFENC")
          },(err)=> {
            console.log(err.error)
          })
        }
      }
    });*/
  }


}

