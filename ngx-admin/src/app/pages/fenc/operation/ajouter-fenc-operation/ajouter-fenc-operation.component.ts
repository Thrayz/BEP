import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatDatepicker } from '@angular/material/datepicker';
import { AnomalieService } from '../../../../@core/Services/anomalie.service';
import { Router } from '@angular/router';
import { NbDialogService, NbWindowService } from '@nebular/theme';
import { DialogChoiceServiceComponent } from './dialog-choice-service/dialog-choice-service.component';
import { ArticleService } from '../../../../@core/Services/article.service';
import { Article } from '../../../../@core/Models/Article';
import { Observable } from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import { User } from '../../../../@core/Models/User';
import { TokenStorageService } from '../../../../@core/Services/token-storage.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { AnomalieFilesService } from '../../../../@core/Services/anomalie-files.service';
import { environment } from '../../../../../environments/environment';


@Component({
  selector: 'ngx-ajouter-fenc-operation',
  templateUrl: './ajouter-fenc-operation.component.html',
  styleUrls: ['./ajouter-fenc-operation.component.scss']
})
export class AjouterFencOperationComponent implements OnInit {
  
  private backendUrl = environment.apiUrl;

  nonConforme : string = "false"
  securisation : string = "0"
  securisationButton : string = "false"
  formFENC : FormGroup;
  formUAP : FormGroup;
  articles:Article[] = []
  filteredArticle:Observable<Article[]>;
  codeArticles:String[]
  stepTwo:Boolean = false
  currentUser:User
  selectedFiles: File[] = [];
  confirmedFiles : File[] = [];
  fileUrls: SafeUrl[] = [];

  qualiteNom : string;
  selectedDate : Date;
  showDatePicker:boolean;
  serviceFromDialog:string;

  @ViewChild('contentTemplate', { static: true }) contentTemplate: TemplateRef<any>;



  constructor(private anomalieFileService:AnomalieFilesService,private windowService:NbWindowService,private sanitizer: DomSanitizer,private tokenStorage:TokenStorageService,private articleService:ArticleService,private dialogService: NbDialogService,private router:Router,public dialog: MatDialog,private anomalieService:AnomalieService) { }

  ngOnInit(): void {
    this.formFENC = new FormGroup({
      codeArticle : new FormControl('',Validators.required),
      partNumber : new FormControl('',Validators.required),
      designation : new FormControl('',Validators.required),
      dateDetection : new FormControl('',Validators.required),
      lieuDetection : new FormControl('',Validators.required),
      quiDetecter : new FormControl('',Validators.required),
      sn : new FormControl('',Validators.required),
      of : new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$")]),
      quantite : new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$")]),
      typeEcart: new FormControl('',Validators.required),
      standard : new FormControl('',Validators.required),
      zone : new FormControl('',Validators.required),
      typeDetection : new FormControl('',Validators.required),
      statusService : new FormControl('',Validators.required),
      uap : new FormControl('',Validators.required),
    })
    

    ///// initialize detection ///////
    this.currentUser = this.tokenStorage.getUser()
    this.formFENC.get("quiDetecter").setValue(this.currentUser.nom + " " + this.currentUser.prenom)
    ////////////////////


    this.formUAP = new FormGroup({
      uap : new FormControl('',Validators.required),
      
    })

    this.articleService.getAllArticle().subscribe(data =>{
      this.articles = data
    })
    this.filteredArticle = this.formFENC.get("codeArticle").valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
    this.formFENC.get("codeArticle").valueChanges.subscribe(data =>{
      console.log("codearticle :: ",data)
      let articleFiltered = this.articles.filter(article => article.codeArticle == data)
      if(articleFiltered.length > 0){
        console.log(articleFiltered)
        this.formFENC.get("designation").setValue(articleFiltered[0].designation)
        this.formFENC.get("partNumber").setValue(articleFiltered[0].partNumber)
      }
      
    })
  }

  private _filter(value: string): Article[] {
    const filterValue = this._normalizeValue(value);
    return this.articles.filter(article => this._normalizeValue(article.codeArticle).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  get fs() {
    return this.formFENC.controls;
  }

  get fss() {
    return this.formUAP.controls;
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

  saveAnomalie(){
    console.log("form values : ",this.formFENC.value)
    this.formFENC.get("uap").setValue(this.formUAP.get("uap").value)
    this.dialogService.open(DialogChoiceServiceComponent).onClose.subscribe((service:string) => {
      if(service){
        this.formFENC.get("statusService").setValue(service);
        if(this.formFENC.valid){
          this.anomalieService.addAnomalie(this.formFENC.value,this.currentUser.idUser).subscribe(data => {
            if (this.selectedFiles && this.selectedFiles.length > 0) {
              for (const file of this.selectedFiles) {
                const formData = new FormData();
                formData.append('file', file);
                this.anomalieFileService.addAnomalieFile(formData,data.idAnomalie).subscribe(data => {
                  console.log(data)
                })
              }
            }
            console.log("data from add : ",data)
            this.router.navigateByUrl("/pages/FENC/listFENC")
          },(err)=> {
            console.log(err.error)
          })
        }
      }
    });
  }


  saveUAP(){
    if(this.formUAP.valid){
      this.stepTwo = true
    }
  }

  handleFileWindow(contentTemplate) {
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
