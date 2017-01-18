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

  constructor(private cartService: CartService, private events: Events, private toastService: ToastService) {}

  ngOnInit() {
    this.elements = new Array<Element>();

    this.events.subscribe('cart:removeElement', (element) => {
      this.elements = this.cartService.cart.elements;
      this.events.publish('cart:updateCart', element);
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

  ionViewWillEnter() {
    GoogleAnalytics.trackView('Cart');
    this.elements = this.cartService.cart.elements;
  }

  delete(element: Element) {
    this.cartService.removeElement(element);
    this.events.publish('cart:removeElement', element);
    this.toastService.showMessage(element.title);
  }

}
