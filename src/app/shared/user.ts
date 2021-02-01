import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class User {
  isAuthenticated: boolean = false;

  constructor(public UserId: number, public UserName: string, public passwordHash: string) { }

}
