import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';

import {
  Search,
  ChevronDown,
  ShoppingCart,
  Bell,
  LogOut,
  User,
  Lock,
  Mail,
} from 'angular-feather/icons';

const icons = {
  Search,
  ChevronDown,
  ShoppingCart,
  Bell,
  LogOut,
  User,
  Lock,
  Mail,
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class FeatherIconModule {}
