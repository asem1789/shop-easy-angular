import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'my-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  currentTab: string = 'orders';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (!params.tab) {
        this.router.navigate(['/me'], { queryParams: { tab: 'orders' } });
      }
      this.currentTab = params.tab;
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
