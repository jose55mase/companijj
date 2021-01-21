import { Component, OnInit,Input } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() productss:string ="Prouctos";
  public load:boolean = true;



  constructor() {
    setTimeout(()=>{
      this.load = false
    },5000)
  }

  ngOnInit(): void {
  }

}
