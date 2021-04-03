/* 
    #note
    #ArrowDropDown
    * this is Custom icon, outside of feather/icons
    The name must be arrow-drop-down
    * from Capitalize into use dash -
    * delete any width, height, fill ... attribute in svg icon in order to can overide with class name
*/
import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { ArrowDropDown, ArrowDropUp } from '../../assets/icons';

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
  ArrowDropDown,
  ArrowDropUp,
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class FeatherIconModule {}
