import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleManagementComponent } from './article-management.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { AjoutArticleComponent } from './ajout-article/ajout-article.component';

const routes: Routes = [
  { path: '', component: ListArticleComponent },
  { path: 'list', component: ListArticleComponent },
  { path: 'ajout', component: AjoutArticleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleManagementRoutingModule { }
