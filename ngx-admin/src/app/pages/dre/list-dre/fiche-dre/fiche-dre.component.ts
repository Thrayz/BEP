import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FENCModel } from '../../../../@core/data/FENCModel';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'ngx-fiche-dre',
  templateUrl: './fiche-dre.component.html',
  styleUrls: ['./fiche-dre.component.scss']
})
export class FicheDreComponent implements OnInit {

  DRE_data : FENCModel

  title = 'htmltopdf';
  @ViewChild('htmlData') htmlData!: ElementRef


  constructor(private route:ActivatedRoute) {
    route.params.subscribe(params => {
      console.log("data : ",params['data'])
      console.log("parse : ",JSON.parse(params['data']))
      this.DRE_data = JSON.parse(params['data']);
    });
   }

  ngOnInit(): void {
  }

  downloadPdf(){
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });
  }

}
