import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  @Input() options: string[] = [];
  @Output() selected = new EventEmitter();
  selectedValue: string = 'Select';
  showOptions: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.selectedValue = this.options[0];
  }

  onSelectClick(x: any) {
    this.selectedValue = x.value;
    this.showOptions = false;
    this.selected.emit(this.selectedValue);
  }

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }
}
