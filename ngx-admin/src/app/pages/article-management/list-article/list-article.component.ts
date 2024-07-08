import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import { Router } from '@angular/router';
import { ButtonViewSmartTableComponent } from '../../global-components/button-view-smart-table/button-view-smart-table.component';
import { Anomalie } from '../../../@core/Models/Anomalie';
import { AnomalieService } from '../../../@core/Services/anomalie.service';
import { ArticleService } from '../../../@core/Services/article.service';
import { Article } from '../../../@core/Models/Article';

@Component({
  selector: 'ngx-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.scss']
})
export class ListArticleComponent implements OnInit {

  idAnomalie:number
  anomalie:Anomalie = new Anomalie()
  listArticle: Article[]
  id:string

  
  constructor(private articleService:ArticleService,private router:Router,private service: SmartTableData) {
    this.articleService.getAllArticle().subscribe(data => {
      this.listArticle = data
      this.source.load(this.listArticle);
    })
    
  }

  ngOnInit(): void {
  }


  settings = {
    actions: false,
    columns: {
      codeArticle: {
        title: 'Code Article M3',
        type: 'string',
      },
      designation: {
        title: 'Désignation',
        type: 'string',
      },
      partNumber: {
        title: 'Part Number',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  handleGridSelected(event){
    let data = event.data
    this.router.navigate(["/pages/FENC/tabs", data.idAnomalie ])
    console.log("clicked");
    console.log("this is event : ",event)
    console.log("this is event data : ",event.data)
  }

  handleCreation(event){
    console.log("add cliked")
    this.router.navigateByUrl("/pages/FENC/ajouterFENC")
  }

}
