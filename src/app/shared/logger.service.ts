import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoggerService {
  write(line: any) {
    console.log(line);
  }
}
