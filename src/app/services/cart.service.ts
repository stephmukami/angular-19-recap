import { Injectable, signal } from '@angular/core';
import { Product } from '../pages/products-list/products-list.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([])

  addToCart( product: Product){
    console.log("item added")
    this.cart.set([...this.cart(),product])
  }
  constructor() { }
}
