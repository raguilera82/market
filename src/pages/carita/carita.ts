import { Component } from '@angular/core';
import { CartService } from '../../providers/cart-service';

@Component({
  selector: 'page-carita',
  templateUrl: 'carita.html'
})
export class CaritaPage {

  smile: boolean;

  constructor(private cartService: CartService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CaritaPage');
  }

  ionViewWillEnter() {
    this.smile = this.cartService.count() > 0;
    console.log(this.smile);
  }

}
