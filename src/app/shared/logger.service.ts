import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  write(line: any) {
    console.log(line);
  }
}
