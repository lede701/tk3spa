import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { ConfigService } from './config.service';
import { DataService } from './data.service';
import { User } from './user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _user: User;

  AuthChanged: Subject<User> = new Subject<User>();

  constructor(private cfgService: ConfigService, private dbService: DataService) {
    let jSess = localStorage.getItem("tk3user");
    let objSess = JSON.parse(jSess);
    if (objSess) {
      this._user = objSess;
    } else {
      this._user = new User(0, '', '');
    }
  }

  getIsAuthenticated(): boolean {
    return this._user.isAuthenticated;
  }

  Login(username: string, password: string): boolean {
    /*
    const promise = new Promise<boolean>((resolve, reject) => {
      resolve(true);
    });
    */
    this._user = new User(1, username, password);
    this._user.isAuthenticated = true;
    localStorage.setItem("tk3user", JSON.stringify(this._user));
    this.AuthChanged.next(this._user);
    return true;
  }

  Logout() {
    let newUser = new User(0, '', '');
    this._user = newUser;

    localStorage.setItem("tk3user", JSON.stringify(this._user));
    this.AuthChanged.next(this._user);
  }
}
