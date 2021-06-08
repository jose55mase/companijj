import { Component, OnInit }                              from '@angular/core';
import { Product }                                        from 'app/models/product.model';
import { StoreService }                                   from 'app/service/store.service';
import {ActivatedRoute,Routes,Router,NavigationExtras}    from '@angular/router'; // CLI imports router

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  items:Product[];
  private productMoment:Product;
  showCreateProduct = false;
  constructor(private activatedRoute : ActivatedRoute,private storeService$: StoreService
    ,private ROUTER : Router) {
    var status = false;
    this.loadLogin();
    this.items = JSON.parse(sessionStorage.getItem("searchProduct"));
    storeService$.searchProduct.subscribe((data)=>{
      this.items = data;
    })
  }
  ngOnInit(): void { }
  loadLogin(){
    if(localStorage.getItem('user') != null){
      this.showCreateProduct = true
    }
  }

  public findByIdAndBuy(item:Product){
    this.productMoment = item;
    const productMoment = this.productMoment;

    let dataNavigate : NavigationExtras = {
      queryParams : productMoment
    }
    this.ROUTER.navigate(["/buy"],dataNavigate)
  }

  public findByIdEdit(item:Product){
    this.productMoment = item;
    const productMoment = this.productMoment;
    let dataNavigate : NavigationExtras = {
      queryParams : productMoment
    }
    this.ROUTER.navigate(["/products/add"],dataNavigate)
  }

}
