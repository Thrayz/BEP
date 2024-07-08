import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatDatepicker } from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import { AnomalieService } from '../../../../@core/Services/anomalie.service';
import { Anomalie } from '../../../../@core/Models/Anomalie';
import { CasAjoutComponent } from '../../signature-part/cas-ajout/cas-ajout.component';
import { DecisionService } from '../../../../@core/Services/decision.service';
import { AnomalieFilesService } from '../../../../@core/Services/anomalie-files.service';
import { NbWindowService } from '@nebular/theme';
import { AnomalieFiles } from '../../../../@core/Models/AnomalieFiles';
import { environment } from '../../../../../environments/environment';
import { TokenStorageService } from '../../../../@core/Services/token-storage.service';
import { User } from '../../../../@core/Models/User';

@Component({
  selector: 'ngx-ajout-fenc-production',
  templateUrl: './ajout-fenc-production.component.html',
  styleUrls: ['./ajout-fenc-production.component.scss']
})
export class AjoutFencProductionComponent implements OnInit {

  private backendUrl = environment.apiUrl;

  nonConformite : string 
  securisation : string = "0"
  securisationButton : string = "false"
  productionFencForm : FormGroup;
  decisionForm : FormGroup;
  selectedDate : Date;
  showDatePicker:boolean;
  anomalieFiles:AnomalieFiles[] = []
  currentUser:User

  decisionValidator = true

  idAnomalie:number
  previousFencData : any
  anomalie:Anomalie = new Anomalie()
  @ViewChild(CasAjoutComponent) signatureForm: CasAjoutComponent;

  
  ///////
  NonConformiteChecked:Boolean
  securisationChecked:Boolean
  //////

  constructor(private tokenStorage:TokenStorageService,private windowService:NbWindowService,private anomalieFileService:AnomalieFilesService,private decisionService:DecisionService,private anomalieService:AnomalieService,private route:ActivatedRoute,public dialog: MatDialog,private router:Router) { }

  ngOnInit(): void {
    
    this.route.params.subscribe(params => {
      console.log("data : ",params['data'])
      console.log("parse : ",params['id'])
      this.idAnomalie = params['id'];
      this.loadAnomalieData(this.idAnomalie)
    });

    this.decisionForm = new FormGroup({
      aucuneAction :new FormControl(false,Validators.required),
      retoucheDonnees :new FormControl(false,Validators.required),
      refRetoucheDonnees:new FormControl(''),
      retoucheDre:new FormControl(false,Validators.required),
      refRetoucheDre:new FormControl(''),
      rebut:new FormControl(false,Validators.required),
      nom:new FormControl('',Validators.required),
      signature:new FormControl(''),
    })

    this.anomalieFileService.getAnomalieFilesByAnomalie(this.idAnomalie).subscribe(data=>{
      this.anomalieFiles = data
    })

    this.currentUser = this.tokenStorage.getUser();
  }

  


  loadAnomalieData(idAnomalie:number){
    this.anomalieService.getAnomalieById(idAnomalie).subscribe(data => {
      this.previousFencData = data
      this.anomalie = data
      this.NonConformiteChecked = this.anomalie.nonConformite
      this.securisationChecked = this.anomalie.securisation
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

  


  onSubmitDecision(){
    if(this.decisionForm.get("aucuneAction").value == null && this.decisionForm.get("retoucheDonnees").value == null && this.decisionForm.get("retoucheDre").value == null && this.decisionForm.get("rebut").value == null)
    {
      this.decisionValidator = false
    }else{
      if(!this.decisionForm.get("retoucheDonnees").value)
      this.decisionForm.get("refRetoucheDonnees").setValue("")
    if(!this.decisionForm.get("retoucheDre").value)
      this.decisionForm.get("refRetoucheDre").setValue("")
    const signatureFormData = this.signatureForm.getFormData();
    console.log(signatureFormData)
    this.decisionForm.get("nom").setValue(signatureFormData.nom)
    this.decisionForm.get("signature").setValue(signatureFormData.signature)
    const {aucuneAction,retoucheDonnees,refRetoucheDonnees,retoucheDre,refRetoucheDre,rebut,nom,signature} = this.decisionForm.value;
    let anomalieObject = {aucuneAction,retoucheDonnees,refRetoucheDonnees,retoucheDre,refRetoucheDre,rebut,nom,signature,anomalie:this.anomalie}
    console.log(this.decisionForm.value)
    console.log(anomalieObject)
    /*if(this.decisionForm.valid)
    {
      this.decisionService.addDecision(anomalieObject).subscribe(data => {
        console.log(data)
        this.router.navigateByUrl("/pages/FENC/production/attenteFENC")
      })
    }*/
    this.decisionService.addDecisionWithAnomalie(anomalieObject,anomalieObject.anomalie.idAnomalie,this.currentUser.idUser).subscribe(data => {
      console.log(data)
      this.router.navigateByUrl("/pages/FENC/production/attenteFENC")
    })
    }
    
  }


  onCheckboxChange(checkboxName: string) {
    const checkboxes = ['aucuneAction', 'retoucheDonnees', 'retoucheDre', 'rebut'];

    checkboxes.forEach(name => {
      if (name !== checkboxName) {
        this.decisionForm.get(name).setValue(false);
      }
    });
  }

  openWindow(contentTemplate) {
    this.windowService.open(
      contentTemplate,
      {
        title: 'Les piéces jointes',
        context: {
          text: '',
        },
        buttons:{
          minimize: false,
          maximize: false,
          fullScreen: false,
        }
      },
    );
  }

  downloadFile(fileName:string){
    this.anomalieFileService.downloadFile(fileName).subscribe((response: Blob) => {
      const blob = new Blob([response], { type: response.type });
  
      // Create a link element and simulate a click to trigger the download
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = fileName;
      link.click();
  
      // Clean up after the link is clicked
      window.URL.revokeObjectURL(link.href);
      link.remove();
    });
  }

  getImageUrl(imageName: string): string {
    if(imageName)
    {
      return this.backendUrl+`oauth/file/images/serve/${imageName}`;

    }
  }

}
