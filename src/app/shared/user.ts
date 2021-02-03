import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class User {
  TYPE: string = "shared/User";
  isAuthenticated: boolean = false;
  tokenExpires: Date;
  refreshToken: string;

  constructor(public UserId: string, public UserName: string, public Token: string) { }

  clone(): User {
    let newUser = new User(this.UserId, this.UserName, this.Token);
    newUser.isAuthenticated = this.isAuthenticated;
    newUser.tokenExpires = this.tokenExpires
    newUser.refreshToken = this.refreshToken;
    return newUser;
  }

}
