import { Component, OnInit } from '@angular/core';
import { CartInfo } from 'src/app/models';
import { CartService } from 'src/app/_services/cart.service';

@Component({
  selector: 'my-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  items!: CartInfo[];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.items = this.cartService.allItems;
    this.cartService.cartItemsChanged.subscribe((items) => {
      this.items = items;
    });
  }

  countTotalPrice() {
    const items = this.items.reduce((acc, curr) => {
      return acc + (curr.quantity ? curr.quantity * curr.price : curr.price);
    }, 0);

    return items;
  }

  handleIncreaseCount(index: number) {
    this.cartService.addItemToCart(this.items[index]);
  }

  handleDecreaseCount(index: number) {
    this.cartService.removeItemFromCart(this.items[index]);
  }

  handleClearItem(index: number) {
    this.cartService.clearItem(this.items[index]);
  }
}
