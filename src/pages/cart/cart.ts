import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

declare var dataLayer: Array<any>;

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewWillEnter() {
    console.log('ionViewDidLoad CartPage');
    dataLayer.push({
      'screenPath': 'cart',
      'screenName': 'Cart'
    });
    dataLayer.push({'event': 'appScreenView'});
  }

}
