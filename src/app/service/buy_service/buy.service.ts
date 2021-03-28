import { Injectable, EventEmitter  }                                 from '@angular/core';
import { LOGIN }                                                     from './mock-login'
import { environment }                                               from 'environments/environment';
import { Responses }                                                 from 'app/models/response.model';
import { User }                                                      from 'app/models/user.model';
import { PurchaseModel }                                             from 'app/models/purchase.model';


import { AngularFirestore, AngularFirestoreCollection,
  AngularFirestoreDocument }                                          from '@angular/fire/firestore';
import { Observable }                                                 from 'rxjs';
import { map,catchError,retry }                                       from 'rxjs/operators';
import { interval, of, throwError }                                   from 'rxjs';
import { HttpClient, HttpParams,HttpClientModule,HttpErrorResponse  } from '@angular/common/http';
import * as _moment                                                   from 'moment';

@Injectable({
  providedIn: 'root'
})
export class BuyService {

  private URI: string;

  public alertPurchase = new EventEmitter;

  constructor(private http: HttpClient
  ) { this.URI = environment.urlProducto_JAVA }

  savePurchase(purchase: PurchaseModel):Observable<any>{
    return this.http.post<Responses>(`${this.URI}/v1/purchase/save`,purchase);
  }

  saveUser(user: User):Observable<any>{
    return this.http.post<Responses>(`${this.URI}/v1/user/save`,user);
  }

}
