import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ConfigService } from './config.service';
import { DataService } from './data.service';
import { User } from './user';

export interface AuthResponseData {
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string,
  registered?:boolean
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _user: User;

  AuthChanged: Subject<User> = new Subject<User>();

  constructor(private cfgService: ConfigService, private dbService: DataService, private http: HttpClient) {
    let jSess = localStorage.getItem("tk3user");
    let objSess = JSON.parse(jSess);
    if (objSess) {
      this._user = objSess;
    } else {
      this._user = new User('0', '', '');
    }
  }

  getIsAuthenticated(): boolean {
    return this._user.isAuthenticated;
  }

  Login(username: string, password: string) {
    const loginApi = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + this.cfgService.nodeApi;
    /*
    const promise = new Promise<boolean>((resolve, reject) => {
      resolve(true);
    });
    */

    return this.http.post<AuthResponseData>(loginApi, {
      email: username,
      password: password,
      returnSecureToken: true
    }).pipe(catchError(this.HandleError));
    /*
    this._user = new User(1, username, password);
    this._user.isAuthenticated = true;
    localStorage.setItem("tk3user", JSON.stringify(this._user));
    this.AuthChanged.next(this._user);
    return true;
    */
  }

  Logout() {
    let newUser = new User('0', '', '');
    this._user = newUser;

    localStorage.setItem("tk3user", JSON.stringify(this._user));
    this.AuthChanged.next(this._user);
  }

  Create(username: string, password: string) {
    const createApi = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + this.cfgService.nodeApi;
    return this.http.post<AuthResponseData>(createApi,
      {
        email: username,
        password: password,
        returnSecureToken: true
      }
    ).pipe(catchError(this.HandleError));
  }

  HandleError(errorRes) {
    let errMessage = "Unknown error occured.";
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errMessage = 'This account already exists!';
        break;
      case 'INVALID_PASSWORD':
      case 'EMAIL_NOT_FOUND':
      case 'USER_DISABLED':
        errMessage = "eMail and Password don't match!";
        break;
      default:
        console.log(errorRes);
    }
    return throwError(errMessage);
  }

  setUser(user: User) {
    this._user = user;
    this.AuthChanged.next(user);
    localStorage.setItem("tk3user", JSON.stringify(this._user));
  }

}
