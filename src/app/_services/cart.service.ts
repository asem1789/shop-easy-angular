import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CartInfo } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CartService implements OnInit {
  cartItemsChanged = new Subject<CartInfo[]>();
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
      this.cartItemsChanged.next(this.cartItems);
    } else {
      this.cartItems = [...this.cartItems, { ...item, quantity: 1 }];
      this.cartItemsChanged.next(this.cartItems);
    }

    this.countOfItems();
  }

  removeItemFromCart(itemRemoved: any) {
    let currentItem = this.cartItems.find(
      (cartItem) => cartItem.id === itemRemoved.id
    );

    if (currentItem && currentItem.quantity === 1) return;

    this.cartItems = this.cartItems.map((cartItem) => {
      return cartItem.id === itemRemoved.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem;
    });
    this.cartItemsChanged.next(this.cartItems);

    this.countOfItems();
  }

  clearItem(itemCleard: any) {
    let currentItem = this.cartItems.find(
      (cartItem) => cartItem.id === itemCleard.id
    );

    if (!currentItem) return;

    this.cartItems = this.cartItems.filter((cartItem) => {
      return cartItem.id !== itemCleard.id;
    });
    this.cartItemsChanged.next(this.cartItems);

    this.countOfItems();
  }

  get allItems() {
    return this.cartItems;
  }

  private countOfItems() {
    const count = this.cartItems.reduce((acc, curr) => {
      return acc + curr.quantity;
    }, 0);
    this.cartItemsCount.next(count);
  }
}
