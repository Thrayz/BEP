import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatDatepicker } from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import { AnomalieService } from '../../../../@core/Services/anomalie.service';
import { Anomalie } from '../../../../@core/Models/Anomalie';
import { CasAjoutComponent } from '../../signature-part/cas-ajout/cas-ajout.component';
import { DecisionService } from '../../../../@core/Services/decision.service';
import { JustificationService } from '../../../../@core/Services/justification.service';
import { Justification } from '../../../../@core/Models/DecisionProduitExtends/Justification';
import { AnomalieFilesService } from '../../../../@core/Services/anomalie-files.service';
import { NbWindowService } from '@nebular/theme';
import { AnomalieFiles } from '../../../../@core/Models/AnomalieFiles';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'ngx-ajout-fenc-methode',
  templateUrl: './ajout-fenc-methode.component.html',
  styleUrls: ['./ajout-fenc-methode.component.scss']
})
export class AjoutFencMethodeComponent implements OnInit {

  private backendUrl = environment.apiUrl;


  nonConformite : string 
  securisation : string = "0"
  securisationButton : string = "false"
  productionFencForm : FormGroup;
  decisionForm : FormGroup;
  methodeFencForm : FormGroup;
  selectedDate : Date;
  showDatePicker:boolean;
  anomalieFiles:AnomalieFiles[] =[]

  idAnomalie:number
  previousFencData : any
  anomalie:Anomalie = new Anomalie()
  @ViewChild(CasAjoutComponent) signatureForm: CasAjoutComponent;

  justificationToSend:Justification = new Justification()

  
  ///////checbkoxes////////////
  NonConformiteChecked:Boolean
  securisationChecked:Boolean
  aucuneActionChecked:Boolean
  RetoucheDonneesChecked:Boolean
  RetoucheDreChecked:Boolean
  RebutChecked:Boolean
  ///////////////////////

  constructor(private windowService:NbWindowService,private anomalieFileService:AnomalieFilesService,private justificationService:JustificationService,private anomalieService:AnomalieService,private route:ActivatedRoute,public dialog: MatDialog,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log("data : ",params['data'])
      console.log("parse : ",params['id'])
      this.idAnomalie = params['id'];
      this.loadAnomalieData(this.idAnomalie)
    });

    this.methodeFencForm = new FormGroup({
      justification:new FormControl('',Validators.required),
      limitation:new FormControl('',Validators.required),
      nom:new FormControl('',Validators.required),
      signature:new FormControl('',Validators.required),
    })
  }

  loadAnomalieData(idAnomalie:number){
    this.anomalieService.getAnomalieById(idAnomalie).subscribe(data => {
      this.previousFencData = data
      this.anomalie = data
      this.NonConformiteChecked = this.anomalie.nonConformite
      this.securisationChecked = this.anomalie.securisation
      this.aucuneActionChecked = this.anomalie.decision.aucuneAction
      this.RetoucheDonneesChecked = this.anomalie.decision.retoucheDonnees
      this.RetoucheDreChecked = this.anomalie.decision.retoucheDre
      this.RebutChecked = this.anomalie.decision.rebut
    })

    this.anomalieFileService.getAnomalieFilesByAnomalie(this.idAnomalie).subscribe(data=>{
      this.anomalieFiles = data
    })
  }

  get fs() {
    return this.methodeFencForm.controls;
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


  onSubmitJustification(){
    const signatureFormData = this.signatureForm.getFormData();
    console.log(signatureFormData)
    this.methodeFencForm.get("nom").setValue(signatureFormData.nom)
    this.methodeFencForm.get("signature").setValue(signatureFormData.signature)
    const {justification,limitation,nom,signature} = this.methodeFencForm.value;
    let anomalie = this.anomalie
    this.justificationToSend = {...this.justificationToSend,justification,limitation,nom,signature,anomalie}
    console.log(this.justificationToSend)
    console.log(this.methodeFencForm.value)
    /*if(this.decisionForm.valid)
    {
      this.de
      cisionService.addDecision(anomalieObject).subscribe(data => {
        console.log(data)
        this.router.navigateByUrl("/pages/FENC/production/attenteFENC")
      })
    }*/
    this.justificationService.addJustificationWithAnomalie(this.justificationToSend,this.idAnomalie).subscribe(data => {
      console.log(data)
      this.router.navigateByUrl("/pages/FENC/methode/attenteFENC")
    })
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
