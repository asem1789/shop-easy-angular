import { Component, OnInit, Input } from '@angular/core';
import { Products } from 'src/app/models/Products';
import { AuthService } from 'src/app/_services/auth.service';
import { CartService } from 'src/app/_services/cart.service';

@Component({
  selector: 'my-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent implements OnInit {
  @Input() item!: Products;
  currentIndex: number = 0;
  isAuth: boolean = false;

  constructor(
    private cartService: CartService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.user$.subscribe((user) => {
      this.isAuth = !!user;
    });

    this.isAuth = this.authService.isLogged();
  }

  handleNext() {
    if (this.currentIndex < this.item.images.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  handlePrev() {
    if (this.currentIndex === 0) {
      this.currentIndex = this.item.images.length - 1;
    } else {
      this.currentIndex--;
    }
  }

  handleAddToCart() {
    this.cartService.addItemToCart(this.item);
  }
}
