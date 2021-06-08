
import { Injectable, EventEmitter  } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/firestore';


import { fromEvent } from "rxjs";
import { map } from 'rxjs/operators';
import { Product } from "app/models/product.model";

export interface Item { name: string; image:string }
@Injectable({
providedIn: 'root'
})
export class StoreService {

  private _searchProduct = new EventEmitter<Product[]>();
  get searchProduct():EventEmitter<Product[]>{  return this._searchProduct;  }




}
