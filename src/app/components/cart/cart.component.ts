import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { coupon } from 'src/app/models/coupon';
import { product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart/cart.service';
import { CouponService } from 'src/app/services/coupon/coupon.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  coupons:any = [];
  addedProducts = new Map<product, number>();
  total:number = 0;

  validCouponDiscountPercent;
  validCouponDiscountPrice;

  constructor(private couponService: CouponService, private cartService: CartService, private toastr: ToastrService){}
  ngOnInit(): void {
    this.coupons = this.couponService.getAllCoupons();
    this.addedProducts = this.cartService.addedProducts;
  }

  validateCoupon(code:string){
    this.coupons.subscribe(coupon => {
      let isValid:boolean = false;

      for(let coup of coupon){
        if(coup.couponCode === code){
          this.toastr.success("Yaay! Coupon Applied!!", 'DashMart');
          isValid = true;

          this.validCouponDiscountPercent = coup.discountPercent;
          this.validCouponDiscountPrice = (this.total * (this.validCouponDiscountPercent / 100)).toFixed(2);

        }
      }

      if(!isValid)this.toastr.error("Oops! Invalid Coupon!!", 'DashMart');

    })
  }


  calculateTotal(){
    let totalCost = 0;
    for(let addedProduct of this.addedProducts){
      totalCost += addedProduct[0].price * addedProduct[1];
    }
    this.total = totalCost;
    return totalCost.toFixed(2);

  }
  
  calculateFinalPrice(){
    if(this.total > 0 && this.validCouponDiscountPrice > 0){
      let finalPrice = this.total - this.validCouponDiscountPrice;
      return finalPrice.toFixed(2);
    }
    else return this.total.toFixed(2);
  }

}
