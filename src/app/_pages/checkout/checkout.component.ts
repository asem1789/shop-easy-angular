import { Component, OnInit } from '@angular/core';
import { CartInfo, OrdersInfo, OrderStatus } from 'src/app/models';
import { AuthService } from 'src/app/_services/auth.service';
import { CartService } from 'src/app/_services/cart.service';
import { OrdersService } from 'src/app/_services/orders.service';
import { UiService } from 'src/app/_services/ui.service';

@Component({
  selector: 'my-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  items!: CartInfo[];
  totalPrice: number = 0;
  loading: boolean = false;

  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private ordersService: OrdersService,
    private uiService: UiService
  ) {}

  ngOnInit(): void {
    this.items = this.cartService.getAllItems();
    this.cartService.cartItemsChanged.subscribe((items) => {
      this.items = items;
    });
    this.uiService.loadingChanged.subscribe((isLoad) => {
      this.loading = isLoad;
    });
    this.countTotalPrice();
  }

  countTotalPrice() {
    const result = this.items.reduce((acc, curr) => {
      return acc + (curr.quantity ? curr.quantity * curr.price : curr.price);
    }, 0);
    this.totalPrice = result;
  }

  handleIncreaseCount(index: number) {
    this.cartService.addItemToCart(this.items[index]);
    this.countTotalPrice();
  }

  handleDecreaseCount(index: number) {
    this.cartService.removeItemFromCart(this.items[index]);
    this.countTotalPrice();
  }

  handleClearItem(index: number) {
    this.cartService.clearItem(this.items[index]);
    this.countTotalPrice();
  }

  private mangeProductsRef() {
    const items = this.cartService.getAllItems();
    let result: any = [];
    items.forEach((el) => {
      result.push({ count: el.quantity, id: el.id });
    });

    return result;
  }

  submitOrder() {
    const userId = this.authService.getUserInfo().id;
    const data: OrdersInfo = {
      price: this.totalPrice,
      status: OrderStatus.Processing,
      user: userId,
      productsRef: this.mangeProductsRef(),
      createdAt: `${Date.now()}`,
    };

    this.ordersService.saveOrder(data);
  }
}
