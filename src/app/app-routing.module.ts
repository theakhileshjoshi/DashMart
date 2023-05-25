import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {
    path:"",
    component: DashboardComponent
  },
  {
    path:"checkout",
    component: CheckoutComponent
  },
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"profile",
    component: ProfileComponent
  },
  {
    path:"cart",
    component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
