import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../service/login_service/login.service'

import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private modules = [];

  fakeLogin = {
    name:"",
    password:""
  }

  constructor(private loginService$:LoginService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loginService$.components.subscribe(
      (responses) => {
        this.modules = responses
      }
    )
  }

  onCancelCloseView(){
    this.loginService$.loginStateView.emit(false)
  }

  onLogin(){


    if(this.fakeLogin.name == "1" && this.fakeLogin.password == "1"){
        this._snackBar.open("Inicio sesion correctamente", "Exito", {
        duration: 10000,
      });
      var userRol =[
        {
          permissions:["C","R","U","D"],
          modulo:"Productos",
          path: '/products/add',
          title: 'Productos crear',
          icon:'nc-pin-3',
          class: ''
        }
      ]
      this.modules.push(userRol)
      this.loginService$.components.emit(this.modules)
    }
  }

}
