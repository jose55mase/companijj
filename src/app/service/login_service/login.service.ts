import { Injectable, EventEmitter  } from '@angular/core';
import { LOGIN } from './mock-login'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public statusLogin = false;
  private _loginStateView = new EventEmitter<boolean>();
  private _componentes = new EventEmitter<any>();
  private _loginData = new EventEmitter<any>();
  constructor() { }

  // Login mostrar menu
  get loginStateView():EventEmitter<boolean>{  return this._loginStateView;  }
  get components():EventEmitter<any>{
    return this._componentes;
  }
  get loginData():EventEmitter<any>{
    return this._loginData;
  }
  //set loginStateView(_loginStateView:boolean){ this._loginStateView = _loginStateView; }

}
