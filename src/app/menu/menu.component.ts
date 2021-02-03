import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MenuModel } from '../models/menu.model';
import { AuthService } from '../shared/auth.service';
import { User } from '../shared/user';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit, OnDestroy {
  menuItems: MenuModel[];
  @Input("title") siteTitle: string;

  menuSubscription: Subscription;

  constructor(private auth: AuthService, private store: Store<{ menuItems: { items: MenuModel[] } }>) {
    this.menuSubscription = auth.AuthChanged.subscribe((user: User) => {
      this.menuSetup();
    });
  }

  ngOnInit(): void {
    this.menuSetup();
  }

  ngOnDestroy() {
    this.menuSubscription.unsubscribe();
  }

  menuSetup() {
    this.menuItems = [new MenuModel('/', 'Home', 'is-active', true)];

    if (this.auth.getIsAuthenticated()) {
      this.menuItems.push(
        new MenuModel('/day', 'Timesheets', 'is-active', false, [
          new MenuModel('/timesheet', 'Sheet View', 'is-active', false)
        ]));
      this.menuItems.push(new MenuModel('/leave', 'Leave', 'is-active', false));
      if (this.auth.getUserName() === 'lede@ncjfcj.org') {
        this.menuItems.push(new MenuModel('/admin', 'Admin', 'is-active', false, [
          new MenuModel('/menu', 'Menu Admin', 'is-active', false)
        ]));
      }
      this.menuItems.push(new MenuModel(['auth', 'logout'], 'Logout', 'is-active', false));
    } else {
      this.menuItems.push(new MenuModel(['auth', 'login'], 'Login', 'is-active', false));
    }
  }
}
