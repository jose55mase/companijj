
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
export interface Item { name: string; image:string;category:string }
@Injectable({
providedIn: 'root'
})
export class ProductService {

  private itemsCollection: AngularFirestoreCollection<Item>;
  private itemDoc:AngularFirestoreDocument<Item>;
  items: Observable<Item[]>;


  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('product');
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  retornaItems(){
    return this.items;
  }

  findById(item){
    this.itemDoc=this.afs.doc<Item>("product/"+item.id);
    console.log(this.itemDoc.get);
  }

}
