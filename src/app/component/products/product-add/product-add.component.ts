import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormControl } from '@angular/forms';
import { ProductService } from 'app/service/product.service';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  alertActive       : boolean = false;
  prodroductWindows : boolean = false;
  json = new Object;

  constructor( private fb: FormBuilder, private productService : ProductService  ) {}

  formControlProduct = this.fb.group({
    inputProductName: ['', [Validators.required]],
    inputProductPrice: ['', [Validators.required]],
    inputProductImage: ['', [Validators.required]],
    inputProductDescription: ['', [Validators.required]],
    inputProductCategory: ['', [Validators.required]],
    contrasena: ['', []],
  });

  onProductSave(){
    /*
    var json = {}
    var idesData = Date.now()
    this.alertActive = true
    this.prodroductWindows = true
    setTimeout(()=>{
      this.alertActive = false;
    },3000)
    //name : this.formControlProduct.value.inputProductName;
    this.json={
      id : idesData
      ,name:this.formControlProduct.value.inputProductName
      ,price: this.formControlProduct.value.inputProductPrice
      ,description: this.formControlProduct.value.inputProductDescription
      ,image:this.formControlProduct.value.inputProductImage ? this.formControlProduct.value.inputProductImage : "https://cdn11.bigcommerce.com/s-0kvv9/images/stencil/1280x1280/products/335343/489756/shredzgoojitzu-inset1__24291.1595979828.jpg?c=2"
      ,category:this.formControlProduct.value.inputProductCategory
    }

    var data = this.productService.addNewItem(this.json)
    */
  }

  onProductEdit(){
    this.prodroductWindows = false
  }

  ngOnInit(): void {
  }



}
