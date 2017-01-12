import { CartService } from './../../providers/cart-service';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { CartPage } from '../cart/cart';

declare var dataLayer: Array<any>;

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = HomePage;
  tab2Root: any = CartPage;

  numberCartElements: number;

  constructor(private cartService: CartService) {}

  ionViewWillEnter() {
    console.log('ionViewDidLoad TabsPage');
    dataLayer.push({
      'screenPath': 'tabs',
      'screenName': 'Tabs'
    });
    dataLayer.push({'event': 'appScreenView'});
  }

  ngOnInit() {
    this.cartService.init();
    this.numberCartElements = 2;
  }

}
