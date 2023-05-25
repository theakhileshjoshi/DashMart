import { Component } from '@angular/core';
import { product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart/cart.service';
import { CouponService } from 'src/app/services/coupon/coupon.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  addedProducts = new Map<product, number>();

  validCouponDiscountPercent;
  validCouponDiscountPrice;
  finalPrice:number = 0;
  validCouponCode = "";

  constructor(private cartService: CartService){
    this.validCouponDiscountPercent = cartService.validCouponDiscountPercent;
    this.validCouponDiscountPrice = cartService.validCouponDiscountPrice;
    this.addedProducts = cartService.addedProducts;
    this.finalPrice = cartService.finalPrice;
    this.validCouponCode = cartService.validCouponCode;
  }
  
}
