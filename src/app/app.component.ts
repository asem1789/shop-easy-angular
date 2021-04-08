import { Component, OnInit } from '@angular/core';
import { AuthService } from './_services/auth.service';
import { CartService } from './_services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'shop-easy';

  constructor(
    private authService: AuthService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.authService.authListener();
    /**
     * @question_1
     * I've to call this loadCartItems() function in order get info about cartItems
     * => but I can delete it from here, and put this function in the
     * carService in constructor, It'll work?
     * @What is the better way and what's diffrent
     */
    this.cartService.loadCartItems();
  }
}
