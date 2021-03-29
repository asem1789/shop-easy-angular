import { Component, HostListener, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'my-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnChanges {
  checked: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {}

  toggleSideNav(value: boolean) {
    this.checked = value;
  }
}
