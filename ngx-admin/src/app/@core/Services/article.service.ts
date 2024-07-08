import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Article } from '../Models/Article';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private apiUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }


  public addArticle(article:any):Observable<Article>{
    return this.http.post<Article>(`${this.apiUrl}article/add`,article);
  }

  public getAllArticle():Observable<Article[]>{
    return this.http.get<Article[]>(`${this.apiUrl}article/get`);
  }

  public deleteArticleById(idArticle:number){
    return this.http.delete(`${this.apiUrl}article/delete/`+idArticle);
  }

  public getArticleById(idArticle:number):Observable<Article>{
    return this.http.get<Article>(`${this.apiUrl}article/get/`+idArticle);
  }

}
