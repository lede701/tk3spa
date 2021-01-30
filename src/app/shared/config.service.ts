import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  serviceApi: string;

  constructor() {
    this.serviceApi = 'https://mybobo-21957-default-rtdb.firebaseio.com/';
  }
}
