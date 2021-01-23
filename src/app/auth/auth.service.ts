import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private _isAuthenticated: boolean;

  getIsAuthenticated(): boolean {
    return this._isAuthenticated == true;
  }
}
