import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  private _isAuthenticated: boolean;
  private _userId: number;
  private _username: string;

  constructor() {
    this._isAuthenticated = false;
    let jSess = localStorage.getItem("tk3user");
    let objSess = JSON.parse(jSess);
    for (let key in objSess) {
      this[key] = objSess[key];
    }
  }

  getIsAuthenticated(): boolean {
    return this._isAuthenticated == true;
  }

  Login(username: string, password: string): boolean {
    /*
    const promise = new Promise<boolean>((resolve, reject) => {
      resolve(true);
    });
    */
    this._userId = 1;
    this._username = username;
    this._isAuthenticated = true;

    localStorage.setItem("tk3user", JSON.stringify(this));

    return true;
  }

  Logout() {
    this._userId = 0;
    this._username = '';
    this._isAuthenticated = false;

    localStorage.setItem("tk3user", JSON.stringify(this));
  }
}
