import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { LoginService } from 'app/service/login_service/login.service';
import { StoreService } from './../../service/store.service';
import { Routes, Router, NavigationExtras } from '@angular/router';
import { CategoryService } from 'app/service/category_service/category.service';
import { Responses } from 'app/models/response.model'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  //Variables
  showCreateProduct = false;
  listProduct = [];

  constructor(private storeService: StoreService,private ROUTER : Router
    ,private loginService$:LoginService, private categoryService$ : CategoryService) {
    this.loadLogin();
    this.loadCategoryData();
  }

  public selectProductMenu(data:string){
    //this.storeService.selectProductMenu(data)
  }

  ngOnInit(){  }

  loadLogin(){
    if(localStorage.getItem('user') != null){
      this.showCreateProduct = true
    }
  }

  loadCategoryData(){
    this.categoryService$.getAllCategorys().subscribe(
      (responses:Responses)=>{
        console.log("Response---------> //////////////");
        console.log(responses.data)
        this.listProduct = responses.data;
      }
    )
  }


}
