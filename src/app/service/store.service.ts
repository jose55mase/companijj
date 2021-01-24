
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/firestore';


import { fromEvent } from "rxjs";
import { map } from 'rxjs/operators';

export interface Item { name: string; image:string }
@Injectable({
providedIn: 'root'
})
export class StoreService {

  public producto = "";


  constructor() {

  }

  selectProductMenu(data:string){
    this.producto = data
  }




}
