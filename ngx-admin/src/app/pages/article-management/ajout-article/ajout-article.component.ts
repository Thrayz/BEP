import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleService } from '../../../@core/Services/article.service';

@Component({
  selector: 'ngx-ajout-article',
  templateUrl: './ajout-article.component.html',
  styleUrls: ['./ajout-article.component.scss']
})
export class AjoutArticleComponent implements OnInit {

  articleForm:FormGroup
  constructor(private router:Router,private articleService:ArticleService) { }

  ngOnInit(): void {
    this.articleForm = new FormGroup({
      codeArticle : new FormControl('',Validators.required),
      designation : new FormControl(''),
      partNumber : new FormControl(''),
    })
  }


  onSubmit(){
    console.log(this.articleForm.value)
    if(this.articleForm.valid){
      this.articleService.addArticle(this.articleForm.value).subscribe(data => {
        console.log(data)
      },err => {
        console.log(err.error)
      })
    }
  }

}
