import { FirebaseAuth } from 'angularfire2';
import { Component } from '@angular/core';

declare var dataLayer: Array<any>;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private fireAuth: FirebaseAuth) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    dataLayer.push({
      'screenPath': 'home',
      'screenName': 'Home'
    });
    dataLayer.push({'event': 'appScreenView'});
  }

  logout() {
    dataLayer.push({
      'appEventCategory': 'home',
      'appEventAction': 'click',
      'appEventLabel': 'logout'
    });
    dataLayer.push({'event': 'appEvent'});
    this.fireAuth.logout();
  }

}
