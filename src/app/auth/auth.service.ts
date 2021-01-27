import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  private _isAuthenticated: boolean;
  private _userId: number;
  private _username: string;

  constructor() {
    this._isAuthenticated = false;
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

    return true;
  }
}
