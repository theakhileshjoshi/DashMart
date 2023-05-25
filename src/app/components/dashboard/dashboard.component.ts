import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  heroProducts:any = []
  products:any = []


  constructor(private productService: ProductService, private cartService: CartService, private toastr: ToastrService){}

  ngOnInit(): void {
    this.heroProducts = this.productService.getHeroProducts();
    this.products = this.productService.getProducts();
    console.log(this.heroProducts);
  }

  addToCart(product:any){
    this.cartService.addProducttoCart(product);
    this.toastr.success(product.title + " added to cart", 'DashMart');
  }
}
