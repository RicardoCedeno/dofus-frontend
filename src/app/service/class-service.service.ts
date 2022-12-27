import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Class } from '../classes/class';

@Injectable({
  providedIn: 'root'
})
export class ClassServiceService {

  private URLbase="http://localhost:8080/enciclopedia/clases";

  constructor(private httpClient:HttpClient) { }

  getDofusClasses():Observable<Class[]>{
    return this.httpClient.get<Class[]>(`${this.URLbase}`)
  }

  getAClass(idClass:number):Observable<any>{
    return this.httpClient.get<Class>(`${this.URLbase}/${idClass}`)
  }

}
