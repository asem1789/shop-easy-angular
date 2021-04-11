import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { OrdersInfo } from 'src/app/models';
import { Products } from 'src/app/models/Products';

@Component({
  selector: 'my-detail-screen',
  templateUrl: './detail-screen.component.html',
  styleUrls: ['./detail-screen.component.scss'],
})
export class DetailScreen implements OnInit {
  @Input() order!: OrdersInfo;
  @Output() clickedBtn = new EventEmitter();
  img: string | null = null;
  constructor() {}

  ngOnInit(): void {
    this.img = this.order.productsRef[0].image;
  }

  selectedRow(url: string) {
    this.img = url;
  }

  onClick() {
    this.clickedBtn.emit();
  }
}
