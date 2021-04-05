import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CartInfo } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CartService implements OnInit {
  cartItems: CartInfo[] = [];
  cartItemsCount = new Subject<number>();

  ngOnInit() {}

  addItemToCart(item: any) {
    let currentItem = this.cartItems.find(
      (cartItem) => cartItem.id === item.id
    );
    // increrase count of quantity When add more one in the same product
    if (currentItem) {
      this.cartItems = this.cartItems.map((cartItem) => {
        return cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem;
      });
    } else {
      this.cartItems = [...this.cartItems, { ...item, quantity: 1 }];
    }

    this.countOfItems();
  }

  private countOfItems() {
    const count = this.cartItems.reduce((acc, curr) => {
      return acc + curr.quantity;
    }, 0);
    this.cartItemsCount.next(count);
  }
}
