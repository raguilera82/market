import { ToastService } from './../../providers/toast-service';
import { Element } from './../../model/element';
import { GoogleAnalytics } from 'ionic-native';
import { Component } from '@angular/core';
import { CartService } from '../../providers/cart-service';
import { Events } from 'ionic-angular';


@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {

  elements: Array<Element>;
  total: number = 0;

  constructor(private cartService: CartService, private events: Events, private toastService: ToastService) { }

  ngOnInit() {
    
    this.elements = new Array<Element>();

    this.events.subscribe('cart:updateCart', () => {
      this.elements = this.cartService.cart.elements;
      this.total = this.cartService.cart.total;
    });

  }

  ionViewWillEnter() {
    GoogleAnalytics.trackView('Cart');
    this.elements = this.cartService.cart.elements;
    let sum = 0;
    for (let elem of this.elements) {
      sum = sum + elem.price;
    }
    this.total = sum;
  }

  delete(element: Element) {
    this.cartService.removeElement(element);
    this.events.publish('cart:updateCart');
    this.events.publish('cart:updateNumberCart', this.cartService.count());
    this.toastService.showMessage(element.title);
  }

}
