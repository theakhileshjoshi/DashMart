import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  constructor(private http: HttpClient) { }

  getAllCoupons(){
    return this.http.get<{couponId:number, couponCode:string, discountPercent:number}[]>(
      "http://localhost:3000/Coupons"
    );
  }
}
