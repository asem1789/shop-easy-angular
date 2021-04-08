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
  loading: boolean = false;
  userInfo: User | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.userInfoChange.subscribe((user) => {
      this.userInfo = user;
    });

    this.route.queryParams.subscribe((params) => {
      if (!params.tab) {
        this.router.navigate(['/me'], { queryParams: { tab: 'orders' } });
      }
      this.currentTab = params.tab;
    });

    this.userInfo = this.authService.getUserInfo();
  }

  onClickTab(key: string) {
    this.router.navigate(['/me'], { queryParams: { tab: key } });
  }
}
