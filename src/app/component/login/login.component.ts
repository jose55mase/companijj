import { Component, OnInit }    from '@angular/core';
import { MatSnackBar}           from '@angular/material/snack-bar';
import { MatBottomSheetRef}     from '@angular/material/bottom-sheet';

import { LoginService }         from './../../service/login_service/login.service';
import { ROUTESNABAR }          from '././../../startApp';
import { User }                 from 'app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private modules = [];
  private user = new User();

  fakeLogin = {
    name:"",
    password:""
  }

  constructor(private loginService$:LoginService,private _snackBar: MatSnackBar,
    private _bottomSheetRef: MatBottomSheetRef<LoginComponent>) { }

  ngOnInit(): void {
    this.modules = ROUTESNABAR
    this.loginService$.statusLogin = true;

  }

  onCancelCloseView(){
    //this.loginService$.loginStateView.emit(false)
    this._bottomSheetRef.dismiss();
  }

  onLogin(){

    if((this.fakeLogin.name == "1" && this.fakeLogin.password == "1") || (this.fakeLogin.name == "2" && this.fakeLogin.password == "2")){
      this._snackBar.open("Inicio sesion correctamente", "Exito", {
        duration: 10000,
      });
      if(this.fakeLogin.name == "1"){
        this.user.email="jose@gmail.com"
        this.user.userName="Jose Luise".toUpperCase();
        localStorage.setItem("user",JSON.stringify(this.user))
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
        var data = { path: '/category/add',  title: 'Categorias',        icon:'nc-tile-56',    class: ''  };
        var chat = { path: '/chat/response/manager',          title: 'Chat',       icon:'nc-chat-33', class: '' };
        this.modules.push(chat)
        this.modules.push(userRol)
        this.modules.push(data);
        this.loginService$.components.emit(this.modules)
        this.loginService$.loginData.emit(this.modules)
      }else{
        this.user.email="danielg7@gmail.com"
        this.user.userName="daniel angel G7".toUpperCase();
        localStorage.setItem("user",JSON.stringify(this.user))
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
        var data = { path: '/category/add',  title: 'Categorias',        icon:'nc-tile-56',    class: ''  };
        var chat = { path: '/chat/response/manager',          title: 'Chat',       icon:'nc-chat-33', class: '' };
        this.modules.push(chat)
        this.modules.push(userRol)
        this.modules.push(data);
        this.loginService$.components.emit(this.modules);
        this.loginService$.loginData.emit(this.modules);
      }

    }else{
      this._snackBar.open("Usuario incorrecto", "No existe", {
        duration: 10000,
      });
    }
  }

}
