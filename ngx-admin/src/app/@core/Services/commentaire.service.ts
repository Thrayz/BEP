import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Commentaire } from '../Models/Commentaire';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  private apiUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }


  public addArticle(article:any):Observable<Commentaire>{
    return this.http.post<Commentaire>(`${this.apiUrl}commentaire/add`,article);
  }

  public addCommentaireWithAnomalie(commentaire:any,idAnomalie:number,idUser:number):Observable<Commentaire>{
    return this.http.post<Commentaire>(`${this.apiUrl}commentaire/add/`+idAnomalie+"/"+idUser,commentaire);
  }

  public getAllArticle():Observable<Commentaire[]>{
    return this.http.get<Commentaire[]>(`${this.apiUrl}commentaire/get`);
  }

  public deleteArticleById(idArticle:number){
    return this.http.delete(`${this.apiUrl}commentaire/delete/`+idArticle);
  }

  public getArticleById(idArticle:number):Observable<Commentaire>{
    return this.http.get<Commentaire>(`${this.apiUrl}commentaire/get/`+idArticle);
  }
}
