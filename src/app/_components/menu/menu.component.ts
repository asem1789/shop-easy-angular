import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
  Input,
  OnChanges,
} from '@angular/core';
import { UtilsService } from 'src/app/_services/utils.service';

@Component({
  selector: 'my-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  clicked: boolean = false;

  constructor(private utilsService: UtilsService) {}

  ngOnInit() {
    this.utilsService.menuBtnToggle.subscribe((isClick) => {
      this.clicked = isClick;
    });
  }

  onClickLabel() {
    this.utilsService.menuBtnToggle.next(!this.clicked);
  }
}
