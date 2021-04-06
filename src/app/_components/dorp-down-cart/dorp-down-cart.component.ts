import { Component, Input, OnInit } from '@angular/core';
import { CartInfo } from 'src/app/models';
import { CartService } from 'src/app/_services/cart.service';

@Component({
  selector: 'my-dorp-down-cart',
  templateUrl: './dorp-down-cart.component.html',
  styleUrls: ['./dorp-down-cart.component.scss'],
})
export class DorpDownCartComponent implements OnInit {
  @Input() items: CartInfo[] = [];

  constructor() {}

  ngOnInit(): void {}

  countTotalPrice() {
    const items = this.items.reduce((acc, curr) => {
      return acc + (curr.quantity ? curr.quantity * curr.price : curr.price);
    }, 0);

    return items;
  }
}
