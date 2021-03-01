import { Injectable, EventEmitter  } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _loginStateView = new EventEmitter<boolean>();
  constructor() { }

  // Login mostrar menu
  get loginStateView():EventEmitter<boolean>{  return this._loginStateView;  }
  //set loginStateView(_loginStateView:boolean){ this._loginStateView = _loginStateView; }

}
