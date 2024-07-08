import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnomalieService } from '../../../../@core/Services/anomalie.service';
import { Anomalie } from '../../../../@core/Models/Anomalie';
import { DemandeRetouche } from '../../../../@core/Models/Dre/DemandeRetouche';
import { DreService } from '../../../../@core/Services/dre.service';
import { TokenStorageService } from '../../../../@core/Services/token-storage.service';
import { User } from '../../../../@core/Models/User';
import { NbWindowService } from '@nebular/theme';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { DreFilesUploadService } from '../../../../@core/Services/dre-files-upload.service';

@Component({
  selector: 'ngx-ajout-dre-methode',
  templateUrl: './ajout-dre-methode.component.html',
  styleUrls: ['./ajout-dre-methode.component.scss']
})
export class AjoutDreMethodeComponent implements OnInit {

  data = {designation:"AW139 RH",codeArticle:"A1005891",Pn:"503581-1",Sn:"T013856"}

  methodeDreForm : FormGroup
  idAnomalie : number
  anomalie:Anomalie
  demandeRetouche:DemandeRetouche = new DemandeRetouche()
  currentUser:User;
  currentDate = new Date()
  selectedFiles: File[] = [];
  confirmedFiles : File[] = [];
  fileUrls: SafeUrl[] = [];

  private backendUrl = environment.apiUrl;



  constructor(private dreFilesUploadService:DreFilesUploadService,private sanitizer: DomSanitizer,private http:HttpClient,private windowService: NbWindowService,private tokenStorage:TokenStorageService,private dreService:DreService,private anomalieService:AnomalieService,private route:ActivatedRoute,private router:Router) {
    this.methodeDreForm = new FormGroup({
      ncassocier: new FormControl('', [Validators.required]),
      resumerSolution: new FormControl('', [Validators.required]),
      cds: new FormControl('', [Validators.required]),
      montantDerives: new FormControl('', [Validators.required]),
      coutEstimer: new FormControl('', [Validators.required]),
      demandeur: new FormControl('', [Validators.required]),
    })

    this.currentUser = this.tokenStorage.getUser();
   }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log("data : ",params['data'])
      console.log("parse : ",params['id'])
      this.idAnomalie = params['id'];
      this.loadAnomalieData(this.idAnomalie)
    });
  }


  loadAnomalieData(idAnomalie:number){
    this.anomalieService.getAnomalieById(idAnomalie).subscribe(data => {
      this.anomalie = data
    })
  }

  onSubmit(){
    let anomalie = this.anomalie
    this.demandeRetouche = this.methodeDreForm.value
    this.demandeRetouche.demandeur = this.currentUser.nom + " " + this.currentUser.prenom
    this.demandeRetouche.signature = this.currentUser.signature
    this.demandeRetouche.anomalie = anomalie
    console.log(this.demandeRetouche)
    /*if(this.decisionForm.valid)
    {
      this.de
      cisionService.addDecision(anomalieObject).subscribe(data => {
        console.log(data)
        this.router.navigateByUrl("/pages/FENC/production/attenteFENC")
      })
    }*/
    if (this.selectedFiles && this.selectedFiles.length > 0) {
      this.dreService.addDemandeRetoucheWithAnomalie(this.demandeRetouche,this.anomalie.idAnomalie).subscribe(data => {
        console.log(data)
          for (const file of this.selectedFiles) {
            const formData = new FormData();
            formData.append('file', file);
            this.dreFilesUploadService.addDreFilesUpload(formData,data.idDemandeRetouche).subscribe(data => {
              console.log(data)
            })
          }
        this.router.navigateByUrl("/pages/DRE/methode/attenteDRE")
      })
    }
  }

  openWindow(contentTemplate) {
    this.windowService.open(
      contentTemplate,
      {
        title: 'Ajouter piéces jointes',
        context: {
          text: 'Ajouter d\'ici :',
        },
        buttons:{
          minimize: false,
          maximize: false,
          fullScreen: false,
        }
      },
    );
  }

  onFileSelected(event: any): void {
    if(this.selectedFiles.length == 0){
      this.selectedFiles.push(event.target.files[0]);
      const fileUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(event.target.files[0]));
      this.fileUrls.push(fileUrl);
    }
    else{
      let state = true
      this.selectedFiles.forEach( file => {
        console.log("here")
        console.log("file.name : ",file.name," event.target.files[0].name : ",event.target.files[0].name)
        if(file.name == event.target.files[0].name)
        {
          console.log("true")
          state = false
          
        }
      })
      if(state == true)
      {
        this.selectedFiles.push(event.target.files[0]);
        const fileUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(event.target.files[0]));
        this.fileUrls.push(fileUrl);
      }
      else
      {
        setTimeout(() => {
          window.alert("duplicate");
        });
      }
    }
    
  }


  triggerFileInput(): void {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }
  }

  createObjectURL(file: File): string {
    return URL.createObjectURL(file);
  }

  updateFileListUI(): void {
    const fileListContainer = document.getElementById('fileListContainer');
    fileListContainer.innerHTML = ''; // Clear previous list
  
    for (const file of this.selectedFiles) {
      const fileLink = document.createElement('a');
      fileLink.href = URL.createObjectURL(file);
      fileLink.target = '_blank';
      fileLink.textContent = file.name;
  
      fileListContainer.appendChild(fileLink);
    }
  }

  removeFile(indexFile:number){
    this.selectedFiles.splice(indexFile)
    this.fileUrls.splice(indexFile)
  }

  getImageUrl(imageName: string): string {
    if(imageName)
    {
      return this.backendUrl+`oauth/file/images/serve/${imageName}`;

    }
  }

}
