import { Element } from './../model/element';
import { UserService } from './user-service';
import { Cart } from './../model/cart';
import { Injectable } from '@angular/core';
import { AngularFire, AngularFireDatabase, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class CartService {


  cart: Cart;

  constructor(private af: AngularFire, private database: AngularFireDatabase, private userService: UserService) {
  }

  init() {
    this.cart = new Cart();
    let list: FirebaseListObservable<any> = this.database.list('/' + this.userService.getUser().uid);
    list.push(this.cart);
    //this.reset();
  }

  /*addElement(element: Element): void {
    this.cart.elements.push(element);
    let obj = this.parent.
    this.parent.update(this.cart, this.cart);
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
    this.elements = new Array<any>();
  }*/

}
