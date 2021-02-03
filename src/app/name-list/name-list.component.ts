import { Component, OnInit } from '@angular/core';
import { Tk3User } from '../models/user.model';

@Component({
  selector: 'app-name-list',
  templateUrl: './name-list.component.html',
  styleUrls: ['./name-list.component.css']
})
export class NameListComponent implements OnInit {

  names: Tk3User[];

  constructor() {
    this.names = [];
    /*
    this.names.push(new User('Leland', 'Ede', 'lede', 'testing1234', 5));
    this.names.push(new User('Natalie', 'Ede', 'nede', 'testing1234', 5));
    this.names.push(new User('Evan', 'Schricker', 'eschricker', 'testing1234', 5));
    this.names.push(new User('Tristan', 'Ede', 'tede', 'testing1234', 5));
    */
  }

  ngOnInit(): void {
  }

}
