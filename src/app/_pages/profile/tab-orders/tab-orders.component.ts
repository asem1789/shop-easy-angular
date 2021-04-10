import { Component, OnInit, Input } from '@angular/core';
import { OrdersInfo, OrderStatus } from 'src/app/models';
import { OrdersService } from 'src/app/_services/orders.service';
import { UiService } from 'src/app/_services/ui.service';

@Component({
  selector: 'my-tab-orders',
  templateUrl: './tab-orders.component.html',
  styleUrls: ['./tab-orders.component.scss'],
})
export class TabOrdersComponent implements OnInit {
  orders: OrdersInfo[] = [];
  loading: boolean = true;
  options: OrderStatus[] = [];
  selected: string = '';
  status = OrderStatus;

  constructor(
    private ordersService: OrdersService,
    private uiService: UiService
  ) {}

  ngOnInit(): void {
    this.selected = OrderStatus.Processing;
    this.options = [
      OrderStatus.Processing,
      OrderStatus.Completed,
      OrderStatus.Canceled,
    ];
    this.ordersService.fetchOrdersByUser()?.subscribe((_orders) => {
      this.orders = _orders;
    });
    this.uiService.loadingChanged.subscribe((isLoad) => {
      this.loading = isLoad;
    });
  }

  onClickSelected(value: string) {
    this.selected = value;
  }

  show() {
    if (
      this.selected === OrderStatus.Completed ||
      this.selected === OrderStatus.Canceled
    ) {
      return false;
    }

    return true;
  }
}
