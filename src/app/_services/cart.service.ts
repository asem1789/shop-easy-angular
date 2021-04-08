import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CartInfo } from '../models';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class CartService implements OnInit {
  cartItemsChanged = new Subject<CartInfo[]>();
  private cartItems: CartInfo[] = [];
  private cartItemsCount: number = 0;

  private CART_ITEM_KEY: string = 'CARTITEM';

  constructor(private localStgSrv: LocalStorageService) {}

  ngOnInit() {}

  loadCartItems() {
    const value = this.localStgSrv.get(this.CART_ITEM_KEY) || [];
    this.cartItems = [...value];
    this.cartItemsCount = this.countOfItems();
  }

  private storeCartItems() {
    this.localStgSrv.set(this.CART_ITEM_KEY, this.cartItems);
  }

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

    this.storeCartItems();
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

    this.storeCartItems();
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

    this.storeCartItems();
  }

  clearAll() {
    this.cartItems = [];
    this.cartItemsChanged.next([]);
    this.storeCartItems();
  }

  getAllItems() {
    return this.cartItems;
  }

  getCountItems() {
    return this.cartItemsCount;
  }

  private countOfItems() {
    return this.cartItems.reduce((acc, curr) => {
      return acc + curr.quantity;
    }, 0);
  }
}
