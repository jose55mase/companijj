import { Injectable, EventEmitter  } from '@angular/core';
import { LOGIN } from './mock-login'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _loginStateView = new EventEmitter<boolean>();
  private _componentes = new EventEmitter<any>();
  constructor() { }

  // Login mostrar menu
  get loginStateView():EventEmitter<boolean>{  return this._loginStateView;  }
  get components():EventEmitter<any>{
    return this._componentes
  }
  //set loginStateView(_loginStateView:boolean){ this._loginStateView = _loginStateView; }

}
