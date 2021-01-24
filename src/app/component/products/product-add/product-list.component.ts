import { Component, OnInit,Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore'
import { ProductService } from './../../../service/product.service'
import { Routes, Router, NavigationExtras } from '@angular/router'; // CLI imports router

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() productss:string ="Prouctos";
  public load:boolean = true;
  items:any;
  itemEditar:any={name:''};
  constructor(firestore: AngularFirestore, private productService: ProductService,private ROUTER : Router,) {
    //this.items = firestore.collection('product').valueChanges();
    this.getCallectionProduct();
  }

  ngOnInit(): void {
  }


  public getCallectionProduct(){
    this.productService.retornaItems().subscribe(
      (items)=>{
        this.items=items
        console.log(this.items)
      },
      (error)=>{
        //this.items=items
        console.error(error)
      }
    )
  }

  public findByIdAndBuy(item){

    console.log(item.id)
    let dataNavigate : NavigationExtras = {
      queryParams:{
        "id" : item.id,
        "description":item.description,
        "image":item.image,
        "name":item.name,
        "price":item.price
      }
    }
    this.ROUTER.navigate(["/buy"],dataNavigate)
    //this.productService.findById()
  }

}
