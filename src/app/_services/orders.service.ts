import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { OrdersInfo } from '../models/Orders';
import { AuthService } from './auth.service';
import { CartService } from './cart.service';
import { UiService } from './ui.service';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrdersService implements OnInit {
  ordersByUserChange = new Subject<any[]>();
  private ordersById: any[] = [];

  constructor(
    private db: AngularFirestore,
    private uiService: UiService,
    private cartService: CartService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  fetchOrdersByUser() {
    this.uiService.loadingChanged.next(true);
    let userId: any;
    let user = this.authService.getUserInfo();
    if (user && user.id) {
      userId = user.id;
    } else {
      return;
    }
    return this.db
      .collection('orders', (ref) => ref.where('user', '==', userId))
      .get()
      .pipe(
        map((snapShot) => {
          let data: any = [];
          snapShot.forEach((el: any) => {
            data.push({ id: el.id, ...el.data() });
          });
          this.uiService.loadingChanged.next(false);
          this.ordersByUserChange.next(data);
          return data;
        })
      );
  }

  saveOrder(order: OrdersInfo) {
    this.uiService.loadingChanged.next(true);
    this.db
      .collection('orders')
      .add(order)
      .then(() => {
        this.uiService.loadingChanged.next(false);
        this.cartService.clearAll();
        this.router.navigate(['/me'], { queryParams: { tab: 'orders' } });
      })
      .catch((err) => {
        this.uiService.loadingChanged.next(false);
        console.log('error from save ORder: ', err);
      });
  }
}
