import { Component, OnInit, Input } from '@angular/core';
import { OrdersInfo, OrderStatus } from 'src/app/models';
import { Products } from 'src/app/models/Products';
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
  showDetails: boolean = false;
  orderSelected!: any;

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

  showControlState() {
    if (
      this.selected === OrderStatus.Completed ||
      this.selected === OrderStatus.Canceled
    ) {
      return false;
    }
    return true;
  }

  showDetailsOrder(index: any) {
    this.showDetails = !this.showDetails;
    this.orderSelected = this.orders[index];
  }

  onCloseDetails() {
    this.showDetails = false;
  }
}
