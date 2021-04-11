import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './_modules/material.module';
import { HomeComponent } from './_pages/home/home.component';
import { HeaderComponent } from './_components/header/header.component';
import { MenuComponent } from './_components/menu/menu.component';
import { FeatherIconModule } from './_modules/feather-icons.module';
import { ContactComponent } from './_pages/contact/contact.component';
import { AboutComponent } from './_pages/about/about.component';
import { NotFoundComponent } from './_pages/not-found/not-found.component';
import { LoginComponent } from './_pages/login/login.component';
import { SignupComponent } from './_pages/signup/signup.component';
import { ProductsComponent } from './_pages/products/products.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LineHorizontalComponent } from './_components/line-horizontal/line-horizontal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './_services/auth.service';
import { CardItemComponent } from './_components/card-item/card-item.component';
import { SelectFavoriteDirective } from './shared/directives/select-favorite.directive';
import { DorpDownCartComponent } from './_components/dorp-down-cart/dorp-down-cart.component';
import { ClickOutsideDirective } from './shared/directives/click-outside.directive';
import { CheckoutComponent } from './_pages/checkout/checkout.component';
import { ProfileComponent } from './_pages/profile/profile.component';
import { TabSettingsComponent } from './_pages/profile/tab-settings/tab-settings.component';
import { TabOrdersComponent } from './_pages/profile/tab-orders/tab-orders.component';
import { TabFavoritesComponent } from './_pages/profile/tab-favorites/tab-favorites.component';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './_components/select/select.component';
import { FilterByStatusPipe } from './shared/pipes/filter-by-status.pipe';
import { DetailScreen } from './_pages/profile/sections/detail-screen/detail-screen.component';
import { SelectRowDirective } from './shared/directives/select-row.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    ContactComponent,
    AboutComponent,
    NotFoundComponent,
    LoginComponent,
    SignupComponent,
    ProductsComponent,
    LineHorizontalComponent,
    CardItemComponent,
    SelectFavoriteDirective,
    DorpDownCartComponent,
    ClickOutsideDirective,
    CheckoutComponent,
    ProfileComponent,
    TabSettingsComponent,
    TabOrdersComponent,
    TabFavoritesComponent,
    SelectComponent,
    FilterByStatusPipe,
    DetailScreen,
    SelectRowDirective,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FeatherIconModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
