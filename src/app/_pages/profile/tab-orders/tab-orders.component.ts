import { Component, OnInit, Input } from '@angular/core';
import { OrdersInfo } from 'src/app/models';
import { OrdersService } from 'src/app/_services/orders.service';
import { UiService } from 'src/app/_services/ui.service';

@Component({
  selector: 'my-tab-orders',
  templateUrl: './tab-orders.component.html',
  styleUrls: ['./tab-orders.component.scss'],
})
export class TabOrdersComponent implements OnInit {
  orders!: OrdersInfo[];
  loading: boolean = true;

  constructor(
    private ordersService: OrdersService,
    private uiService: UiService
  ) {}

  ngOnInit(): void {
    this.ordersService.fetchOrdersByUser()?.subscribe((_orders) => {
      this.orders = _orders;
    });

    this.uiService.loadingChanged.subscribe((isLoad) => {
      console.log('loading: ', isLoad);
      this.loading = isLoad;
    });
  }
}
