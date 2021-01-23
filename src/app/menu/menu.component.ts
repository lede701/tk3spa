import { Component, OnInit, Input } from '@angular/core';
import { MenuModel } from '../models/menu.model';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {
  menuItems: MenuModel[];
  @Input("title") siteTitle: string;

  constructor(private auth: AuthService) {
    this.menuItems = [new MenuModel('/', 'Home', 'is-active', true),
      new MenuModel('/timesheet', 'Timesheets', 'is-active', false),
      new MenuModel('/leave', 'Leave', 'is-active', false)
    ];

    if (this.auth.getIsAuthenticated()) {
      this.menuItems.push(new MenuModel(['auth', 'logout'], 'Logout', 'is-active', false));
    } else {
      this.menuItems.push(new MenuModel(['auth', 'login'], 'Login', 'is-active', false));
    }

  }

  ngOnInit(): void {
  }

}
