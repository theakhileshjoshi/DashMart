import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CartComponent } from './components/cart/cart.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path:"",
    component: DashboardComponent
  },
  {
    path:"checkout",
    component: CheckoutComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"profile",
    component: ProfileComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"cart",
    component: CartComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"signup",
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
