import { Component } from '@angular/core';
import { LoggerService } from './shared/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'TimeKeeper 3';
  version = '3.0.1';

  constructor(private log: LoggerService) { }
}
