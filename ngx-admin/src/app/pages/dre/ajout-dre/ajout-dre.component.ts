import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-ajout-dre',
  templateUrl: './ajout-dre.component.html',
  styleUrls: ['./ajout-dre.component.scss']
})
export class AjoutDREComponent implements OnInit {

  data = {designation:"AW139 RH",codeArticle:"A1005891",Pn:"503581-1",Sn:"T013856"}

  constructor() { }

  ngOnInit(): void {
  }

}
