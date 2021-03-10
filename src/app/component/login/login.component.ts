import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../service/login_service/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fakeLogin = {
    name:"",
    password:""
  }

  constructor(private loginService$:LoginService) { }

  ngOnInit(): void {
  }

  onCancelCloseView(){
    this.loginService$.loginStateView.emit(false)
  }

  onLogin(){
    console.log(this.fakeLogin)
  }

}
