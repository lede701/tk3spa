import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { DataService } from './data.service';
import { User } from './user';
import { environment } from '../../environments/environment';

export interface AuthResponseData {
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string,
  registered?:boolean
}

export interface AuthRefreshData {
  expires_in: string;
  token_type: string;
  refresh_token: string;
  id_token: string;
  user_id: string;
  project_id: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService implements OnDestroy {
  private _user: User;
  private _keepAliveTimer;

  AuthChanged: Subject<User> = new Subject<User>();

  constructor(private dbService: DataService, private http: HttpClient) {
    let jSess = localStorage.getItem("tk3user");
    let objSess = JSON.parse(jSess);
    if (objSess) {
      this._user = new User(objSess.UserId, objSess.UserName, objSess.Token);
      this._user.isAuthenticated = objSess.isAuthenticated;
      this._user.tokenExpires = new Date(objSess.tokenExpires);
      this._user.refreshToken = objSess.refreshToken;
      // Check if token need to be updated and also start the tracking prodcess
      this.UpdateToken(this);
    } else {
      this._user = new User('0', '', '');
    }
  }

  getIsAuthenticated(): boolean {
    return this._user.isAuthenticated;
  }

  Create(username: string, password: string) {
    const createApi = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.apiKey;
    return this.http.post<AuthResponseData>(createApi,
      {
        email: username,
        password: password,
        returnSecureToken: true
      }
    ).pipe(catchError(this.HandleError));
  }

  Login(username: string, password: string) {
    // Create API uri for login
    const loginApi = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.apiKey;
    // Call webclient post method with login information
    return this.http.post<AuthResponseData>(loginApi, {
      email: username,
      password: password,
      returnSecureToken: true
    }).pipe(catchError(this.HandleError));
  }

  Logout() {
    let newUser = new User('0', '', '');
    this._user = newUser;

    localStorage.setItem("tk3user", JSON.stringify(this._user));
    this.AuthChanged.next(this._user);
    if (this._keepAliveTimer) {
      clearTimeout(this._keepAliveTimer);
    }
  }

  UpdateToken(src:AuthService) {
    let now = new Date();
    if (now > src._user.tokenExpires) {
      // Try and update token
      let updateApi = 'https://securetoken.googleapis.com/v1/token?key=' + environment.apiKey;
      src.http.post<AuthRefreshData>(updateApi, {
        grant_type: 'refresh_token',
        refresh_token: src._user.refreshToken
      }).subscribe(authData => {
        // Token has been updated so update current user token information
        src._user.Token = authData.id_token;
        src._user.refreshToken = authData.refresh_token;
        src._user.tokenExpires = new Date();
        src._user.tokenExpires.setTime(src._user.tokenExpires.getTime() + +authData.expires_in * 1000);
      }, error => {
        src.HandleError(error);
      });
    }
    // Check if there is a timer defined
    if (src._keepAliveTimer) {
      // Clear past timer
      clearTimeout(src._keepAliveTimer);
    }
    // Setup next time to check
    let time = 15 * 60 * 1000;
    // Create new timout period
    src._keepAliveTimer = setTimeout(src.UpdateToken, time, src);
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

  ngOnDestroy() {
    if (this._keepAliveTimer) {
      clearTimeout(this._keepAliveTimer);
    }
  }

  getUserName(): string {
    return this._user.UserName;
  }

  getUser(): User {
    return this._user.clone();
  }
}
