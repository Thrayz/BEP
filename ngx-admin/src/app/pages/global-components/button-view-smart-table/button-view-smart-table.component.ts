import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NbComponentStatus } from '@nebular/theme';

@Component({
  selector: 'ngx-button-view-smart-table',
  templateUrl: './button-view-smart-table.component.html',
  styleUrls: ['./button-view-smart-table.component.scss']
})
export class ButtonViewSmartTableComponent implements OnInit {
  @Input() buttonType: any;
  @Input() value: string | number;
  @Input() rowData: any;

  @Output() save: EventEmitter<any> = new EventEmitter();

  data : any;

  statusType: NbComponentStatus
  buttonText: string

  constructor(private route:Router) { }

  ngOnInit(): void {

    ///////// FENC ////////
    if(this.buttonType == "exportDREPdfButton")
    {
      this.statusType = "warning"
      this.buttonText = "Imprimer DRE"
    }
    else if(this.buttonType == "redigerDRE") {
      this.statusType = "primary"
      this.buttonText = "Rédiger DRE"
    }
    else if(this.buttonType == "OuvrirFENCProduction") {
      this.statusType = "primary"
      this.buttonText = "Ouvrir FENC"
    }
    else if(this.buttonType == "OuvrirFENCMethode") {
      this.statusType = "primary"
      this.buttonText = "Ouvrir FENC"
    }
    else if(this.buttonType == "OuvrirFENCQualite") {
      this.statusType = "primary"
      this.buttonText = "Ouvrir FENC"
    }
    else if(this.buttonType == "OuvrirFENCBe") {
      this.statusType = "primary"
      this.buttonText = "Ouvrir FENC"
    }
    else if(this.buttonType == "OuvrirFENCNav") {
      this.statusType = "primary"
      this.buttonText = "Ouvrir FENC"
    }

    /////////// DRE //////////

    if(this.buttonType == "OuvrirDREMethode")
    {
      this.statusType = "primary"
      this.buttonText = "Ouvrir DRE"
    }
    else if(this.buttonType == "OuvrirDREQualite")
    {
      this.statusType = "primary"
      this.buttonText = "Ouvrir DRE"
    }
    else if(this.buttonType == "OuvrirDREBe")
    {
      this.statusType = "primary"
      this.buttonText = "Ouvrir DRE"
    }

    console.log("row data : ",this.rowData)
    console.log("value data : ",this.value)
  }

  


  onClick(){
    let dataString = JSON.stringify(this.rowData);
    let data = this.rowData;
    if(this.buttonType == "exportDREPdfButton"){
      this.route.navigate(["/pages/DRE/ficheDRE", { 'data': dataString }]);
    }
    else if(this.buttonType == "redigerDRE"){
      this.route.navigate(["/pages/DRE/ajoutDRE"]);
    }
    else if(this.buttonType == "OuvrirDRE"){
      this.route.navigate(["/pages/DRE/detailDRE"]);
    }
    else if(this.buttonType == "OuvrirFENCProduction"){
      this.route.navigateByUrl("/pages/FENC/production/ajoutFENC/"+data.idAnomalie );
    }
    else if(this.buttonType == "OuvrirFENCMethode"){
      this.route.navigateByUrl("/pages/FENC/methode/ajoutFENC/"+data.idAnomalie);
    }
    else if(this.buttonType == "OuvrirFENCQualite"){
      this.route.navigateByUrl("/pages/FENC/qualiteProduit/ajoutFENC/"+data.idAnomalie);
    }
    else if(this.buttonType == "OuvrirFENCBe"){
      this.route.navigateByUrl("/pages/FENC/be/ajoutFENC/"+data.idAnomalie);
    }
    else if(this.buttonType == "OuvrirFENCNav"){
      this.route.navigateByUrl("/pages/FENC/navigabilite/ajoutFENC/"+data.idAnomalie);
    }


    /////////// DRE //////////

    if(this.buttonType == "OuvrirDREMethode")
    {
      this.route.navigateByUrl("/pages/DRE/methode/ajoutDRE/"+data.idAnomalie);
    }
    else if(this.buttonType == "OuvrirDREQualite")
    {
      this.route.navigateByUrl("/pages/DRE/qualite/ajoutDRE/"+data.idAnomalie);
    }
    else if(this.buttonType == "OuvrirDREBe")
    {
      this.route.navigateByUrl("/pages/DRE/be/ajoutDRE/"+data.idAnomalie);
    }
    

  }

}
