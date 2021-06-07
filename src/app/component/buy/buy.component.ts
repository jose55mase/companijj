import { Component, OnInit }                                from '@angular/core';
import {ActivatedRoute, Routes, Router, RouterModule,
  NavigationExtras }                                        from '@angular/router'; // CLI imports router
import { User }                                             from 'app/models/user.model';
import { Product }                                          from 'app/models/product.model';
import {NgForm}                                             from '@angular/forms';
import { BuyService }                                       from 'app/service/buy_service/buy.service'
import { PurchaseModel }                                    from 'app/models/purchase.model';
import {MatSnackBar}                                        from '@angular/material/snack-bar';


@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  public paramURL:any
  //VARIABLES de copra
  public loadpurchase:number;
  public purchaseModel : PurchaseModel = new PurchaseModel();
  public showLoadpurchase:boolean = false;
  public user:User= new User();

  constructor(private activatedRoute : ActivatedRoute,private _snackBar: MatSnackBar,private router:Router,
  private buyService$ :BuyService) {
    this.activatedRoute.queryParams.subscribe((param:Product)=>{
      this.paramURL = param;
    })

  }

  ngOnInit(): void {  }

  loadPurchase(){
    var idesData = Date.now()
    const iuud = Number(JSON.stringify(idesData).slice(4,idesData.toString().length))
    this.user.id = iuud;
    this.purchaseModel.id = iuud;
    this.purchaseModel.clients =  this.user
    this.purchaseModel.products = this.paramURL


    this.buyService$.saveUser(this.user)
      .subscribe((response)=>{ this.buyService$.savePurchase(this.purchaseModel)
        .subscribe((res)=>{
          setTimeout(()=>{
            this._snackBar.open("Nos comunicaremos con tigo", "Gracias por tu compra", {
              duration: 15000,
              direction:'ltr'
            });
            this.router.navigate(['/dashboard'])
          },18000)

        }),
      (error) => {console.log("ERROR")}
    })


    this.showLoadpurchase = true;
    for(let load = 0 ; load <101 ; load = load + 1){
      setTimeout(()=>{
        this.loadpurchase = load
      },9000)
    }
  }

}
