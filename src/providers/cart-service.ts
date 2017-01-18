import { Element } from './../model/element';
import { UserService } from './user-service';
import { Cart } from './../model/cart';
import { Injectable } from '@angular/core';

@Injectable()
export class CartService {

  cart: Cart;

  constructor(private userService: UserService) {
    this.cart = new Cart();
  }

  addElement(element: Element): void {
    this.cart.elements.push(element);
  }

  removeElement(element: any): void {
    let index = this.cart.elements.indexOf(element);
    this.cart.elements.splice(index, 1);
  }

  count(): number {
    let n = this.cart.elements.length;
    if (n == 0) {
      return null;
    }else{
      return this.cart.elements.length;
    }
  }

  reset(): void {
    this.cart.elements = new Array<Element>();
  }

}
