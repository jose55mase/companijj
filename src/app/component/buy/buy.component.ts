import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Routes, Router, RouterModule,NavigationExtras } from '@angular/router'; // CLI imports router

import { Product } from './../models/models'

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  public paramURL:any

  constructor(private activatedRoute : ActivatedRoute,) {
    this.activatedRoute.queryParams.subscribe((param:Product)=>{
      this.paramURL = param;
      console.log("(Joxe param)--------> ",param);
    })
  }

  ngOnInit(): void {
  }

}
