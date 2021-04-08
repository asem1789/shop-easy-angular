import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/Products';
import { ProductsService } from 'src/app/_services/products.service';
import { UiService } from 'src/app/_services/ui.service';

@Component({
  selector: 'my-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Products[] = [];
  loading: boolean = false;
  constructor(
    private productsService: ProductsService,
    private uiService: UiService
  ) {}

  ngOnInit(): void {
    this.uiService.loadingChanged.subscribe((isLoad) => {
      this.loading = isLoad;
    });
    this.productsService.fetchAllProducts().subscribe((res) => {
      this.products = res;
    });
  }
}
