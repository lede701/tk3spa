import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class User {
  TYPE: string = "shared/User";
  isAuthenticated: boolean = false;

  constructor(public UserId: string, public UserName: string, public Token: string) { }

}
