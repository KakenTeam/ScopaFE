import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: "[sidebar]",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  public isManager: boolean;
  menu_min = false;
  constructor(
  ) {}

  ngOnInit() {
    this.isManager = true;
  }

  ToggleSidebar() {
    this.menu_min = !this.menu_min;
  }
}
