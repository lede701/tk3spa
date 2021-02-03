import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class DataService{
  private serverBasePath: string;

  constructor() {
    this.serverBasePath = environment.dataServiceApi;
  }

  getServerBase(): string {
    return this.serverBasePath;
  }
}
