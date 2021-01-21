import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  //Productos
  products = {
    electronica: "Electronica",
    servicios: "Servicios",
    ropa: "Ropa"
  }


  constructor() { }

  ngOnInit(): void {
  }

}
