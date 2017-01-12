import { TabsPage } from './../pages/tabs/tabs';
import { FirebaseAuth } from 'angularfire2';
import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { UserService } from '../providers/user-service';
import { LoginPage } from '../pages/login/login';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild('nav') nav;

  rootPage = null;

  constructor(private platform: Platform, private fireAuth: FirebaseAuth,
  private userService: UserService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      this.init();
    });
  }

   init() {
    this.fireAuth.subscribe(data => {
      if (!data) {
        this.nav.setRoot(LoginPage);
      }else {
        this.userService.setUser(data.auth.uid, data.auth.email);
        this.nav.setRoot(TabsPage);
      }
    }); 
  }
}
