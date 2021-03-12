import { Component, OnInit }    from '@angular/core';
import { MatSnackBar}           from '@angular/material/snack-bar';
import { MatBottomSheetRef}     from '@angular/material/bottom-sheet';

import { LoginService }         from './../../service/login_service/login.service';
import { ROUTESNABAR }          from '././../../startApp';

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

  constructor(private loginService$:LoginService,private _snackBar: MatSnackBar,
    private _bottomSheetRef: MatBottomSheetRef<LoginComponent>) { }

  ngOnInit(): void {
    this.modules = ROUTESNABAR
    
  }

  onCancelCloseView(){
    //this.loginService$.loginStateView.emit(false)
    this._bottomSheetRef.dismiss();
  }

  onLogin(){
    if(this.fakeLogin.name == "1" && this.fakeLogin.password == "1"){
        this._snackBar.open("Inicio sesion correctamente", "Exito", {
        duration: 10000,
      });
      this._bottomSheetRef.dismiss();
      var userRol =
        {
          permissions:["C","R","U","D"],
          modulo:"Productos",
          path: '/products/add',
          title: 'Productos crear',
          icon:'nc-pin-3',
          class: ''
        }
      this.modules.push(userRol)
      this.loginService$.components.emit(this.modules)
    }
  }

}
