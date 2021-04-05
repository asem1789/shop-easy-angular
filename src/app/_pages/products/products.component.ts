import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/Products';

import { PRODUCTS } from './products.data';

@Component({
  selector: 'my-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Products[] = [];
  constructor() {}

  ngOnInit(): void {
    this.products = PRODUCTS;
  }
}
