import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleManagementRoutingModule } from './article-management-routing.module';
import { ArticleManagementComponent } from './article-management.component';
import { AjoutArticleComponent } from './ajout-article/ajout-article.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsRoutingModule } from '../forms/forms-routing.module';
import { ThemeModule } from '../../@theme/theme.module';


@NgModule({
  declarations: [
    ArticleManagementComponent,
    AjoutArticleComponent,
    ListArticleComponent
  ],
  imports: [
    CommonModule,
    ArticleManagementRoutingModule,
    Ng2SmartTableModule,
    NbCardModule,
    FormsModule,
    ReactiveFormsModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    FormsRoutingModule,
    NbCardModule,
    NbButtonModule,
  ]
})
export class ArticleManagementModule { }
