import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Routes, Router, RouterModule,NavigationExtras } from '@angular/router'; // CLI imports router

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  public paramURL = {}

  constructor(private activatedRoute : ActivatedRoute,) {
    this.activatedRoute.queryParams.subscribe((param)=>{
      this.paramURL = param;
      console.log("(Joxe param)--------> ",this.paramURL);
    })
  }

  ngOnInit(): void {
  }

}
