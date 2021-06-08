
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map,catchError,retry } from 'rxjs/operators';
import { interval, of, throwError } from 'rxjs';
import { environment } from 'environments/environment';
import { HttpClient, HttpParams,HttpClientModule,HttpErrorResponse  } from '@angular/common/http';
//import { Headers,RequestOptions } from "@angular/http";
// interface
import { CategoryModel } from 'app/models/category.model';
import { Responses } from 'app/models/response.model';



@Injectable({
  providedIn: 'root',
})

export class CategoryService {

  //private headers = new Headers({'Content_Type':'application/json'});
  //private options = new RequestOptions({headers:this.headers})
  URI: string;

  constructor(private http: HttpClient) {
    this.URI = environment.urlProducto_JAVA
  }

  getAllCategorys():Observable<Responses>{
    return this.http.get<Responses>(`${this.URI}/v1/category/get`);
  }

  addNewCategory(json:CategoryModel){
    return this.http.post<Responses>(`${this.URI}/v1/category/save`,json);
  }

  llamarNotificacion(cuerpo:string){
    let param = new HttpParams();
    param = param.append('subscriptionJson',cuerpo)
    return this.http.post<any>(`http://localhost:8050/send?subscriptionJson${cuerpo}`,{});
  }

}
