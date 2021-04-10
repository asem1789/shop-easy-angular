import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './_pages/about/about.component';
import { CheckoutComponent } from './_pages/checkout/checkout.component';
import { ContactComponent } from './_pages/contact/contact.component';
import { HomeComponent } from './_pages/home/home.component';
import { LoginComponent } from './_pages/login/login.component';
import { NotFoundComponent } from './_pages/not-found/not-found.component';
import { ProductsComponent } from './_pages/products/products.component';
import { ProfileComponent } from './_pages/profile/profile.component';
import { SignupComponent } from './_pages/signup/signup.component';

import { AuthGuard } from './guards/auth.guard';
import { UnAuthGuard } from './guards/unAuth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'login', component: LoginComponent, canActivate: [UnAuthGuard] },
  { path: 'signup', component: SignupComponent, canActivate: [UnAuthGuard] },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'me', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, UnAuthGuard],
})
export class AppRoutingModule {}
