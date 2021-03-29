import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'my-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Output() isChecked = new EventEmitter();
  @Input() bgWhite: string | boolean = false;
  constructor() {}

  ngOnInit(): void {}

  @ViewChild('myInput') input!: any;

  clickButton() {
    this.isChecked.emit(!this.input.nativeElement.checked);
  }
}
