import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnomalieService } from '../../../../@core/Services/anomalie.service';
import { Anomalie } from '../../../../@core/Models/Anomalie';

@Component({
  selector: 'ngx-detail-fenc-admin',
  templateUrl: './detail-fenc-admin.component.html',
  styleUrls: ['./detail-fenc-admin.component.scss']
})
export class DetailFencAdminComponent implements OnInit {

  FENC_Data : Anomalie
  idAnomalie:number

  constructor(private anomalieService:AnomalieService,private route:ActivatedRoute,private router:Router) {
    route.params.subscribe(params => {
      console.log("data : ",params['data'])
      console.log("parse : ",params['id'])
      this.idAnomalie = params['id'];
      this.anomalieService.getAnomalieById(this.idAnomalie).subscribe(data => {
        this.FENC_Data = data
      })
    });
   }

  ngOnInit(): void {
  }


  Imprime(){
    let data = JSON.stringify(this.FENC_Data);
    this.router.navigate(["/pages/FENC/ficheFENC", { 'data': data }])
  }

}