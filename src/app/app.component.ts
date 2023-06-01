import { Component } from '@angular/core';
import { product } from './models/product';
import { CartService } from './services/cart/cart.service';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DashMart';
  addedProducts = new Map<product, number>();
  isUserLoggedIn:boolean;
  constructor(private cartService: CartService,public auth: AuthService){
    this.addedProducts = cartService.addedProducts;
  }

  logOutUser(){
    sessionStorage.clear();
  }
}
