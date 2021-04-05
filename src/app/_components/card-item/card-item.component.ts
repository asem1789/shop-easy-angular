import { Component, OnInit, Input } from '@angular/core';
import { Products } from 'src/app/models/Products';

@Component({
  selector: 'my-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent implements OnInit {
  @Input() item!: Products;
  currentIndex: number = 0;

  constructor() {}

  ngOnInit(): void {
    console.log(this.item.images.length);
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
}
