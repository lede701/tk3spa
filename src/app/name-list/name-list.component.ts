import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-list',
  templateUrl: './name-list.component.html',
  styleUrls: ['./name-list.component.css']
})
export class NameListComponent implements OnInit {

  names: string[];

  constructor() {
    this.names = ["Leland", "Natalie", "Evan", "Trisrtan"];
  }

  ngOnInit(): void {
  }

}
