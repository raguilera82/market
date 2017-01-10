import { FirebaseAuth } from 'angularfire2';
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';

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
      }else {
        this.navCtrl.setRoot(TabsPage);
      }
    }); 
  }

  logout() {
    this.fireAuth.logout();
  }

}
