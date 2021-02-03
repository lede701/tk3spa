import { Component, OnInit, Input } from '@angular/core';
import { Tk3User } from '../models/user.model';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

  @Input() name: Tk3User;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  getFullName() {
    let strName = 'Undefined Name';
    if (!!this.name) {
      strName = this.name.getFullName();
    }
    if (this.authService.getIsAuthenticated()) {
      strName = this.authService.getUserName();
    }
    return strName;
  }

}
