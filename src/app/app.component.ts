import { Component,OnInit } from '@angular/core';
import { LoginService } from './service/login_service/login.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  public loginStateView : boolean= false;

  constructor(private loginService$: LoginService){}

  ngOnInit(){
    this.loginService$.loginStateView.subscribe(v=>{
      this.loginStateView = v;
    });
  }
}
