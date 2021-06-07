import { Component, OnInit }                        from '@angular/core';
import { FormBuilder, Validators,FormControl }      from '@angular/forms';
import { ProductService }                           from 'app/service/product.service';
import {ActivatedRoute, Routes, Router,}            from '@angular/router'; // CLI imports router
import { Product }                                  from 'app/models/product.model';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  imagePath         : string = "assets/company/default_Image.png"
  alertActive       : boolean = false;
  prodroductWindows : boolean = false;
  json = new Object;

  ngOnInit(): void {}
  constructor( private fb: FormBuilder, private productService$ : ProductService,
     private activatedRoute : ActivatedRoute) {

     this.activatedRoute.queryParams.subscribe((param:Product)=>{
       this.onEditProduct(param);
     })
  }

  formControlProduct = this.fb.group({
    inputProductName: ['', [Validators.required]],
    inputProductPrice: ['', [Validators.required]],
    inputProductImage: ['', [Validators.required]],
    inputProductDescription: ['', [Validators.required]],
    inputProductCategory: ['', [Validators.required]],
    inputProductId: [null, []],
  });

  onProductSave(){
    var json = {}
    var idesData = Date.now()
    this.alertActive = true
    this.prodroductWindows = true
    setTimeout(()=>{
      this.alertActive = false;
    },3000)
    //name : this.formControlProduct.value.inputProductName;
    this.json={
      id : this.formControlProduct.value.inputProductId
      ,name:this.formControlProduct.value.inputProductName
      ,price: Number(this.formControlProduct.value.inputProductPrice)
      ,description: this.formControlProduct.value.inputProductDescription
      ,image:this.formControlProduct.value.inputProductImage ? this.formControlProduct.value.inputProductImage : "assets/company/default_Image.png"
      ,category:this.formControlProduct.value.inputProductCategory
    }
    if(this.json["id"] == undefined){
      delete this.json["id"];
    }
    this.productService$.addNewProducts(this.json).subscribe(
      (response)=>{
        console.log("Guardado");
      },
      (error)=>{console.log(error)}
    );

  }

  loadImage(){
    this.imagePath = this.formControlProduct.value.inputProductImage ? this.formControlProduct.value.inputProductImage : "assets/company/default_Image.png";
  }

  onProductEdit(){
    this.prodroductWindows = false
  }

  onEditProduct(product:Product){
    this.formControlProduct.controls.inputProductCategory.setValue(product.category);
    this.formControlProduct.controls.inputProductDescription.setValue(product.description);
    this.formControlProduct.controls.inputProductImage.setValue(product.image);
    this.formControlProduct.controls.inputProductName.setValue(product.name);
    this.formControlProduct.controls.inputProductPrice.setValue(product.price);
    this.formControlProduct.controls.inputProductId.setValue(product.id);
    this.imagePath = product.image ? product.image : "assets/company/default_Image.png";
  }



}
