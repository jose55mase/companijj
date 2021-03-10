import { Component, OnInit,Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore'
import { ProductService } from './../../../service/product.service'
import { Routes, Router, NavigationExtras } from '@angular/router'; // CLI imports router

//interface
import { Product,Responses } from "./../../models/models"



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() productss:string ="Prouctos";
  public load:boolean = true;
  items:Product[];
  private productMoment:Product;
  itemEditar:any={name:''};

  constructor(private productService: ProductService,
    private ROUTER : Router) {
    //this.items = firestore.collection('product').valueChanges();
    //this.getCallectionProduct();

  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  public getAllProducts(){
    this.productService.getAllProducts()
      .subscribe(
        (response:Responses) => {
          this.items = response.data}
      )
  }
  public findByIdAndBuy(item:Product){
    this.productMoment = item;
    const productMoment = this.productMoment;

    let dataNavigate : NavigationExtras = {
      queryParams : productMoment
    }
    this.ROUTER.navigate(["/buy"],dataNavigate)
  }
/*
sereniti
cucumber
debox
  public getCallectionProduct(){
    this.productService.retornaItems().subscribe(
      (items:any)=>{
        //console.log("--------------> ",this.productss)
        this.items = items.filter((data)=>{return data.category == this.productss })
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
  }*/

}
