import { TabsPage } from './../pages/tabs/tabs';
import { FirebaseAuth } from 'angularfire2';
import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { UserService } from '../providers/user-service';
import { LoginPage } from '../pages/login/login';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild('nav') nav;

  rootPage = HomePage;

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
      console.log(data);
      if (!data) {
        this.nav.push(LoginPage);
      }else {
        console.log('DATA_AUTH_EMAIL: ' + data.auth.email);
        this.userService.setUser(data.auth.uid, data.auth.email);
        this.nav.push(TabsPage);
      }
    }); 
  }
}
