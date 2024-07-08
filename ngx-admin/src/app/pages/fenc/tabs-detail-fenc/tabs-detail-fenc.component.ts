import { Component, OnInit } from '@angular/core';
import { AnomalieService } from '../../../@core/Services/anomalie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Anomalie } from '../../../@core/Models/Anomalie';

@Component({
  selector: 'ngx-tabs-detail-fenc',
  templateUrl: './tabs-detail-fenc.component.html',
  styleUrls: ['./tabs-detail-fenc.component.scss']
})
export class TabsDetailFencComponent implements OnInit {

  id!:number
  anomalie:Anomalie
  stateDRE!:Boolean

  tabs: any[] 

  constructor(private anomalieService:AnomalieService,private route:ActivatedRoute,private router:Router) {
    console.log("id from tabs : ",this.route.snapshot.params["id"])
    this.id = this.route.snapshot.params["id"]
    this.anomalieService.getAnomalieById(this.id).subscribe(data =>{
      this.anomalie = data
      console.log(this.anomalie)
      if(this.anomalie?.demandeRetouche?.idDemandeRetouche != null){
        this.stateDRE = true
      }
      else
      {
        this.stateDRE = false
      }
      
      this.tabs = [
        {
          title: 'Données FENC',
          route: '/pages/FENC/tabs/'+this.id+'/FENC/'+this.id,
        },
        {
          title: 'Données DRE',
          route: '/pages/FENC/tabs/'+this.id+'/DRE/'+this.id,
          disabled: !this.stateDRE
        },
        {
          title: 'Flux de process',
          route: '/pages/FENC/tabs/'+this.id+'/flow/'+this.id,
        },
      ];
      
    })
    
    this.router.navigate(["/pages/FENC/tabs",this.id,"FENC",this.id])
   }

  ngOnInit(): void {
  }

}
