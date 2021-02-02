import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  serviceApi: string;
  nodeApi: string;

  constructor() {
    this.serviceApi = 'https://mybobo-21957-default-rtdb.firebaseio.com/';
    this.nodeApi = '{ENTER API KEY HERE}';
  }
}
