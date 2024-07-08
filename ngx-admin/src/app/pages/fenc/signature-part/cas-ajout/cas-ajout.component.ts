import { Component, OnInit,ViewChild,Input,Output,EventEmitter,SimpleChanges  } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatDatepicker } from '@angular/material/datepicker';
import { TokenStorageService } from '../../../../@core/Services/token-storage.service';
import { User } from '../../../../@core/Models/User';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'signature-cas-ajout',
  templateUrl: './cas-ajout.component.html',
  styleUrls: ['./cas-ajout.component.scss']
})
export class CasAjoutComponent implements OnInit {

  private backendUrl = environment.apiUrl;

  @Input() titre? :string ;
  @Input() nomElementId? :string ;
  @Input() dateElementId? :string ;
  @Input() signatureElementId? :string ;
  @Output() notification = new EventEmitter<String>();
  @ViewChild('signatureForm', { static: false }) form: NgForm;


  nonConforme : string = "false"
  securisation : string = "0"
  securisationButton : string = "false"
  signatureFenc : FormGroup;
  currentUser:User;
  currentDate: Date = new Date();

  qualiteNom : string;
  selectedDate : Date;
  showDatePicker:boolean;

  dataEmit:any

  constructor(private tokenStorage:TokenStorageService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.signatureFenc = new FormGroup({
      nom : new FormControl(''),
      signature : new FormControl('')
    })
    this.currentUser = this.tokenStorage.getUser();
    this.signatureFenc.get(['nom']).setValue(this.currentUser.nom + " " + this.currentUser.prenom);
    this.signatureFenc.get(['signature']).setValue(this.currentUser.signature);

    this.signatureFenc.valueChanges.subscribe((formValue) => {
      this.variableChanged(formValue);
    });
  }

  mouseClickAlert(event){
    const editedText = "" +event.target.textContent;
    this.signatureFenc.controls['nom'].setValue(editedText);
    console.log("text",editedText)
  }

  onFocus() {
    console.log("focus")
    const contentNom = document.getElementById(this.nomElementId);
    contentNom.innerHTML = '';
    contentNom.style.color = 'black';
  }

  openDatePicker(datePicker: MatDatepicker<Date>) {
    this.showDatePicker = true;
    setTimeout(() => {
      datePicker.open();
      console.log("here")
    }, 200);
    
    const contentDate = document.getElementById(this.dateElementId);
    contentDate.innerHTML = '';
  }

  getImageUrl(imageName: string): string {
    if(imageName)
    {
      return this.backendUrl+`oauth/file/images/serve/${imageName}`;

    }
  }
  


  variableChanged(formValue: any) {
    if(formValue.nom){
      console.log("nom :",formValue.nom)
    }
    if(formValue.date){
      console.log("nom :",formValue.date)
    }
    if(formValue.nom && formValue.date){
      this.dataEmit = {nom:this.signatureFenc.get("nom").value,date:this.signatureFenc.get("date").value,signature:this.signatureFenc.get("signature").value}
      this.notification.emit(this.dataEmit);
    }
    console.log('Form value changed:', formValue);
  }

  getFormData() {
    return this.signatureFenc.value;
  }

  



}