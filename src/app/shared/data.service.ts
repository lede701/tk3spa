import { Injectable } from '@angular/core';

import { ConfigService } from './config.service';

@Injectable({ providedIn: 'root' })
export class DataService{
  private serverBasePath: string;

  constructor(private cfgService: ConfigService) {
    this.serverBasePath = this.cfgService.serviceApi;
  }

  getServerBase(): string {
    return this.serverBasePath;
  }
}
