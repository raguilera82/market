import { FirebaseAuth } from 'angularfire2';
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navCtrl: NavController, private fireAuth: FirebaseAuth) {
    this.fireAuth.subscribe(data => {
      console.log(data);
      if (!data) {
        this.navCtrl.setRoot(LoginPage);
      }
    }); 
  }

  logout() {
    this.fireAuth.logout();
  }

}
