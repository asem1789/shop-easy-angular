import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';

import {
  Search,
  ChevronDown,
  ShoppingCart,
  Bell,
  LogOut,
} from 'angular-feather/icons';

const icons = { Search, ChevronDown, ShoppingCart, Bell, LogOut };

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class FeatherIconModule {}
