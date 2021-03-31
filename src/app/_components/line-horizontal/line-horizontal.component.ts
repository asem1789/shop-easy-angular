import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-line-horizontal',
  templateUrl: './line-horizontal.component.html',
  styleUrls: ['./line-horizontal.component.scss'],
})
export class LineHorizontalComponent implements OnInit {
  @Input() text: string = '';

  constructor() {}

  ngOnInit(): void {}
}
