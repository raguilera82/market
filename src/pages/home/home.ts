import { GoogleAnalytics } from 'ionic-native';
import { FirebaseAuth } from 'angularfire2';
import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private fireAuth: FirebaseAuth) {}

  ionViewWillEnter() {
    GoogleAnalytics.trackView('Home');
  }

  logout() {
    this.fireAuth.logout();
  }

}
