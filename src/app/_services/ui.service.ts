import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  loadingChanged = new Subject<boolean>();
  errorStateChanged = new Subject<string | null>();
}
