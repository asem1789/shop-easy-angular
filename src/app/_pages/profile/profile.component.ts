import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'my-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  currentTab: string = 'orders';
  isAuth: boolean = false;
  loading: boolean = false;
  userInfo!: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    /**
     * @note
     * to ensur not render page profile until result of authChnage come from firebase
     */
    this.authService.userInfoChange.subscribe((user) => {
      this.loading = false;
      this.isAuth = !!user;
    });

    this.route.queryParams.subscribe((params) => {
      if (!params.tab) {
        this.router.navigate(['/me'], { queryParams: { tab: 'orders' } });
      }
      this.currentTab = params.tab;
    });

    this.isAuth = this.authService.isLogged();
    this.authService.userInfoChange.subscribe((user: any) => {
      this.userInfo = user;
    });
  }

  onClickTab(key: string) {
    console.log('tab clicked: ', key);
    this.router.navigate(['/me'], { queryParams: { tab: key } });
  }

  isCurrentTab(el: string) {
    return el === this.currentTab;
  }
}
