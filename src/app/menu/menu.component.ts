import { Component, OnInit, Input } from '@angular/core';
import { MenuModel } from '../models/menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {
  menuItems: MenuModel[];
  @Input("title") siteTitle: string;

  constructor() {
    this.menuItems = [new MenuModel('/', 'Home', 'is-active', true),
      new MenuModel('/timesheet', 'Timesheet', 'is-active', false)];

    this.siteTitle = "TimeKeeper 3.0";
  }

  ngOnInit(): void {
  }

}
