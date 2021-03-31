import { Component, HostListener, OnChanges, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/_services/utils.service';

@Component({
  selector: 'my-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showSide: boolean = false;
  resetMenu: boolean = false;

  constructor(private utilsService: UtilsService) {}

  ngOnInit(): void {
    this.utilsService.menuBtnToggle.subscribe((res) => {
      this.showSide = res;
    });
  }

  onCloseSide() {
    this.utilsService.menuBtnToggle.next(false);
  }
}
