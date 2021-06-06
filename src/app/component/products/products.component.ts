import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { LoginService } from 'app/service/login_service/login.service';
import { StoreService } from './../../service/store.service';
import { Routes, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  showCreateProduct = false;
  //Productos
  products = {
    electronica: "Electronica",
    hobby_rc: "RC Hobbys",
    //ropa: "ropa"
  }

  constructor(private storeService: StoreService,private ROUTER : Router
    ,private loginService$:LoginService) {
    this.loadLogin();
  }

  public selectProductMenu(data:string){
    console.log("data");
    //this.storeService.selectProductMenu(data)
  }


  ngOnInit(){
  }

  loadLogin(){
    if(localStorage.getItem('user') != null){
      this.showCreateProduct = true
    }
  }


}
