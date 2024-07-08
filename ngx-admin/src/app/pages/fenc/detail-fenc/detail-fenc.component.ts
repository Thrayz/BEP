import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnomalieService } from '../../../@core/Services/anomalie.service';
import { Anomalie } from '../../../@core/Models/Anomalie';
import { environment } from '../../../../environments/environment';
import { ImageService } from '../../../@core/Services/image.service';
import { AnomalieFiles } from '../../../@core/Models/AnomalieFiles';
import { AnomalieFilesService } from '../../../@core/Services/anomalie-files.service';
import { NbWindowService } from '@nebular/theme';


@Component({
  selector: 'ngx-detail-fenc',
  templateUrl: './detail-fenc.component.html',
  styleUrls: ['./detail-fenc.component.scss']
})
export class DetailFencComponent implements OnInit {

  anomalieSelected : Anomalie

  private backendUrl = environment.apiUrl;
  anomalieFiles:AnomalieFiles[] = []


  ///////checbkoxes////////////
  NonConformiteChecked:Boolean
  securisationChecked:Boolean
  aucuneActionChecked:Boolean
  RetoucheDonneesChecked:Boolean
  RetoucheDreChecked:Boolean
  RebutChecked:Boolean
  fencTransmettreChecked:Boolean
  inspectionRecordChecked:Boolean
  planSurveillanceChecked:Boolean
  resolutionProblemeChecked:Boolean
  aucunSuiviChecked:Boolean
  derogationProduitChecked:Boolean
  occurenceReportChecked:Boolean
  ///////////////////////


  constructor(private windowService:NbWindowService,private anomalieFileService:AnomalieFilesService,private imageService:ImageService,private anomalieService:AnomalieService,private route:ActivatedRoute,private router:Router) {
    console.log(this.route.snapshot.params["id"])
    let id = this.route.snapshot.params["id"]
    this.loadAnomalieData(id)
    
    this.anomalieFileService.getAnomalieFilesByAnomalie(id).subscribe(data=>{
      this.anomalieFiles = data
    })
   }

  ngOnInit(): void {
  }

  loadAnomalieData(idAnomalie:number){
    this.anomalieService.getAnomalieById(idAnomalie).subscribe(data => {
      this.anomalieSelected = data
      this.NonConformiteChecked = this.anomalieSelected.nonConformite
      this.securisationChecked = this.anomalieSelected.securisation
      this.aucuneActionChecked = this.anomalieSelected.decision?.aucuneAction
      this.RetoucheDonneesChecked = this.anomalieSelected.decision?.retoucheDonnees
      this.RetoucheDreChecked = this.anomalieSelected.decision?.retoucheDre
      this.RebutChecked = this.anomalieSelected.decision?.rebut
      this.fencTransmettreChecked = this.anomalieSelected.maitrise?.fencTransmettre
      this.inspectionRecordChecked = this.anomalieSelected.maitrise?.inspectionRecord
      this.planSurveillanceChecked = this.anomalieSelected.maitrise?.planSurveillance
      this.resolutionProblemeChecked = this.anomalieSelected.maitrise?.resolutionProbleme
      this.aucunSuiviChecked = this.anomalieSelected.maitrise?.aucunSuivi
      this.derogationProduitChecked = this.anomalieSelected.validationNav?.derogationProduit
      this.occurenceReportChecked = this.anomalieSelected.validationNav?.occurenceReport
    })

    
  }


  Imprime(){
    let data = JSON.stringify(this.anomalieSelected);
    this.router.navigate(["/pages/FENC/ficheFENC", { 'data': data }])
  }

  getImageUrl(imageName: string): string {
    if(imageName)
    {
      return this.backendUrl+`oauth/file/images/serve/${imageName}`;

    }
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

}
