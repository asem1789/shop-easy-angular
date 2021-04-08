import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { AngularFirestore } from '@angular/fire/firestore';
import { UiService } from './ui.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private db: AngularFirestore, private uiService: UiService) {}

  fetchAllProducts() {
    this.uiService.loadingChanged.next(true);
    return this.db
      .collection('products')
      .get()
      .pipe(
        map((snapShot: any) => {
          let res: any = [];
          snapShot.forEach((doc: any) => {
            res.push({ id: doc.id, ...doc.data() });
          });
          this.uiService.loadingChanged.next(false);
          return res;
        })
      );
  }
}
