import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FENCModel } from '../../../../@core/data/FENCModel';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { AnomalieService } from '../../../../@core/Services/anomalie.service';

@Component({
  selector: 'ngx-fiche-fenc',
  templateUrl: './fiche-fenc.component.html',
  styleUrls: ['./fiche-fenc.component.scss']
})
export class FicheFencComponent implements OnInit {

  FENC_data : any
  global_top:string = "120px"
  global_left:string = "100px"
  private backendUrl = environment.apiUrl;

  signatureBlobDecision: SafeUrl;
  signatureBlobJustification: SafeUrl;
  signatureBlobValidationNav: SafeUrl;
  signatureBlobMaitrise: SafeUrl;
  signatureBlobDemandeRetouche: SafeUrl;
  signatureBlobVerificationTechnique: SafeUrl;
  signatureBlobPriseEnCompte: SafeUrl;


  title = 'htmltopdf';
  @ViewChild('htmlData') htmlData!: ElementRef
  @ViewChild('htmlDataDre') htmlDataDre!: ElementRef


  constructor(private anomalieService:AnomalieService,private http:HttpClient,private route:ActivatedRoute,private sanitizer: DomSanitizer) {
    route.params.subscribe(params => {
      console.log("data : ",params['data'])
      console.log("parse : ",JSON.parse(params['data']))
      let data = JSON.parse(params['data']);
      this.anomalieService.getAnomalieById(data.idAnomalie).subscribe(data=> {
        this.FENC_data = data
        console.log("this.FENC_data.decision?.signature : ",this.FENC_data.decision?.signature)
      
      this.http.get(`${this.backendUrl}oauth/file/images/serve/${this.FENC_data.decision?.signature}`, { responseType: 'blob' }).subscribe(data => {
        console.log("data",data)
        const reader = new FileReader();
        reader.onloadend = () => {
          this.signatureBlobDecision = this.sanitizer.bypassSecurityTrustUrl(reader.result as string);
        };
        reader.readAsDataURL(data);
      })
      this.http.get(`${this.backendUrl}oauth/file/images/serve/${this.FENC_data.justification?.signature}`, { responseType: 'blob' }).subscribe(data => {
        const reader = new FileReader();
        reader.onloadend = () => {
          this.signatureBlobJustification = this.sanitizer.bypassSecurityTrustUrl(reader.result as string);
        };
        reader.readAsDataURL(data);
      })
      this.http.get(`${this.backendUrl}oauth/file/images/serve/${this.FENC_data.validationNav?.signature}`, { responseType: 'blob' }).subscribe(data => {
        const reader = new FileReader();
        reader.onloadend = () => {
          this.signatureBlobValidationNav = this.sanitizer.bypassSecurityTrustUrl(reader.result as string);
        };
        reader.readAsDataURL(data);
      })
      this.http.get(`${this.backendUrl}oauth/file/images/serve/${this.FENC_data.maitrise?.signature}`, { responseType: 'blob' }).subscribe(data => {
        const reader = new FileReader();
        reader.onloadend = () => {
          this.signatureBlobMaitrise = this.sanitizer.bypassSecurityTrustUrl(reader.result as string);
        };
        reader.readAsDataURL(data);
      })


      this.http.get(`${this.backendUrl}oauth/file/images/serve/${this.FENC_data.demandeRetouche?.signature}`, { responseType: 'blob' }).subscribe(data => {
        const reader = new FileReader();
        reader.onloadend = () => {
          this.signatureBlobDemandeRetouche = this.sanitizer.bypassSecurityTrustUrl(reader.result as string);
        };
        reader.readAsDataURL(data);
      })
      this.http.get(`${this.backendUrl}oauth/file/images/serve/${this.FENC_data.VerificationTechnique?.signature}`, { responseType: 'blob' }).subscribe(data => {
        const reader = new FileReader();
        reader.onloadend = () => {
          this.signatureBlobVerificationTechnique = this.sanitizer.bypassSecurityTrustUrl(reader.result as string);
        };
        reader.readAsDataURL(data);
      })
      this.http.get(`${this.backendUrl}oauth/file/images/serve/${this.FENC_data.PriseEnCompte?.signature}`, { responseType: 'blob' }).subscribe(data => {
        const reader = new FileReader();
        reader.onloadend = () => {
          this.signatureBlobPriseEnCompte = this.sanitizer.bypassSecurityTrustUrl(reader.result as string);
        };
        reader.readAsDataURL(data);
      })
      })
      
    });
    
   }

  ngOnInit(): void {
  }

  downloadFENCPdf() {

    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      const fileWidth = 210; // A4 width in mm
      const fileHeight = 297;
      const FILEURI = canvas.toDataURL('image/png');
      const PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('FENC-Plateform.pdf');
    });
  }

  downloadDREPdf() {

    let DATADRE: any = document.getElementById('htmlDataDre');
    html2canvas(DATADRE).then((canvas) => {
      const fileWidth = 210; // A4 width in mm
      const fileHeight = 297;
      const FILEURI = canvas.toDataURL('image/png');
      const PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('DRE-Plateform.pdf');
    });
  }

  getImageUrl(imageName: string): string {
    if(imageName)
    {
      return this.backendUrl+`oauth/file/images/serve/${imageName}`;

    }
  }

}
