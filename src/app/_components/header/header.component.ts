import { Component, HostListener, OnChanges, OnInit } from '@angular/core';
import { CartInfo, User } from 'src/app/models';
import { AuthService } from 'src/app/_services/auth.service';
import { CartService } from 'src/app/_services/cart.service';
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
  cartCount: number = 0;
  showDropDownCart: boolean = false;
  itemsSelected: CartInfo[] = [];

  constructor(
    private utilsService: UtilsService,
    private authService: AuthService,
    private cartService: CartService
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

    this.cartService.cartItemsChanged.subscribe((items) => {
      this.itemsSelected = items;
      this.cartCount = this.countOfItems(items);
    });

    this.cartCount = this.cartService.getCountItems();
    this.itemsSelected = this.cartService.getAllItems();
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

  onClickCartIcon() {
    this.showDropDownCart = !this.showDropDownCart;
  }

  onClickOutside(type: string) {
    if (type === 'user') {
      this.showDorpDown = false;
    } else if (type === 'cart') {
      this.showDropDownCart = false;
    }
  }

  private countOfItems(items: any[]) {
    return items.reduce((acc, curr) => {
      return acc + curr.quantity;
    }, 0);
  }
}
