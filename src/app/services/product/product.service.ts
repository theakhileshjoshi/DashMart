import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getHeroProducts(){
    return this.http.get<{title:string, price:number, category:string, description:string, image:URL}[]>(
      "http://localhost:3000/HeroProducts"
    );
  }

  getProducts(){
    return this.http.get<{title:string, price:number, category:string, description:string, image:URL}[]>(
      "https://fakestoreapi.com/products"
    );
  }
}
