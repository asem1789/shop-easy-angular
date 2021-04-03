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
  ],
  imports: [
    BrowserModule,
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
