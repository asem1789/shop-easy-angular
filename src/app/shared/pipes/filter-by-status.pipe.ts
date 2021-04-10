import { Pipe, PipeTransform } from '@angular/core';
import { OrdersInfo } from 'src/app/models';

@Pipe({
  name: 'filterByStatus',
})
export class FilterByStatusPipe implements PipeTransform {
  transform(orders: OrdersInfo[], inputValue: string): OrdersInfo[] | any {
    if (!orders) return;

    if (!inputValue) return orders;

    return orders.filter((el) => {
      return el.status === inputValue;
    });
  }
}
