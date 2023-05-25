import { Injectable } from '@angular/core';
import { product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  addedProducts = new Map<product, number>();
  val?:any;
  constructor() { }

  addProducttoCart(product:any){
    let quantity:number = 1;
    if(this.addedProducts.has(product)){
      this.val = this.addedProducts.get(product);
      if(this.val != undefined){
        this.val = this.val + 1;
        quantity = this.val;
      }
      this.addedProducts.set(product,quantity);
    }else{
      this.addedProducts.set(product,quantity);
    }
  }

}
