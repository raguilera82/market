import { Platform } from 'ionic-angular';
import { FirebaseAuth } from 'angularfire2';
import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private fireAuth: FirebaseAuth, private platform: Platform) {
    this.platform.ready().then(() => {
      window.ga.trackView("Home Page");
    });
  }

  logout() {
     this.platform.ready().then(() => {
            window.ga.trackEvent("Home", "logout", "User Action", 25);
        });
    this.fireAuth.logout();
  }

}
