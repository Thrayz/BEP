import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'ngx-ajouter-fenc',
  templateUrl: './ajouter-fenc.component.html',
  styleUrls: ['./ajouter-fenc.component.scss']
})
export class AjouterFencComponent implements OnInit {

  nonConforme : string = "false"
  securisation : string = "0"
  securisationButton : string = "false"
  formFENC : FormGroup;

  qualiteNom : string;
  selectedDate : Date;
  showDatePicker:boolean;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.formFENC = new FormGroup({
      nonConforme : new FormControl(''),
      securisation : new FormControl(''),
      qualiteNom: new FormControl(''),
      selectedDate : new FormControl(''),
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


}
