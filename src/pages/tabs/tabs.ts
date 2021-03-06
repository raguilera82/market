import { CaritaPage } from './../carita/carita';
import { CartService } from './../../providers/cart-service';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { CartPage } from '../cart/cart';
import { Events } from 'ionic-angular';
import { PeoplePage } from '../people/people';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = HomePage;
  tab2Root: any = CartPage;
  tab3Root: any = CaritaPage;
  tab4Root: any = PeoplePage;

  numberCartElements: number;

  constructor(private cartService: CartService, private events: Events) {
  }

  ngOnInit() {
    
    this.events.subscribe('cart:updateNumberCart', (numberCart) => {
      this.refresh(numberCart);
    });

  }

  refresh(numberCart: number) {
    this.numberCartElements = numberCart;
  }

}
