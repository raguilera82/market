import { Events } from 'ionic-angular';
import { ElementsService } from './../../providers/elements-service';
import { ScannerService } from './../../providers/scanner-service';
import { GoogleAnalytics } from 'ionic-native';
import { FirebaseAuth } from 'angularfire2';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Element } from '../../model/element';
import { CartService } from '../../providers/cart-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  @Output() added = new EventEmitter();

  elements: Array<Element>;

  code: string;

  constructor(
    private fireAuth: FirebaseAuth, 
    private scannerService: ScannerService,
    private elementsService: ElementsService,
    private cartService: CartService,
    private events: Events) {}

  ngOnInit() {
    this.elements = this.elementsService.getElements();
  }

  ionViewWillEnter() {
    GoogleAnalytics.trackView('Home');
  }

  logout() {
    this.fireAuth.logout();
  }

  scanner() {
    this.scannerService.scanner().then((data) => {
      this.code = data.text;
    }, (err) => {
      this.code = err;
      console.log(err);
    })
  }

  add(element: Element) {
    this.cartService.addElement(element);
    this.events.publish('cart:updateCart');
    this.events.publish('cart:updateNumberCart', (this.cartService.count()));
  }

}
