import { Component, HostListener, OnChanges, OnInit } from '@angular/core';
import { User } from 'src/app/models';
import { AuthService } from 'src/app/_services/auth.service';
import { UtilsService } from 'src/app/_services/utils.service';

@Component({
  selector: 'my-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showSide: boolean = false;
  showDorpDown: boolean = false;
  isAuth = false;
  userInfo!: User;

  constructor(
    private utilsService: UtilsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.utilsService.menuBtnToggle.subscribe((res) => {
      this.showSide = res;
    });

    this.authService.authChange.subscribe((authStatus) => {
      this.isAuth = authStatus;
    });

    this.authService.userData.subscribe((user) => {
      this.userInfo = user;
    });
  }

  onCloseSide() {
    this.utilsService.menuBtnToggle.next(false);
  }

  toggleDropdownUser() {
    this.showDorpDown = !this.showDorpDown;
  }

  onSignout() {
    this.showDorpDown = false;
    this.authService.logout();
  }
}
