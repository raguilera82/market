import { TabsPage } from './../pages/tabs/tabs';
import { FirebaseAuth } from 'angularfire2';
import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen, GoogleAnalytics } from 'ionic-native';

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
      StatusBar.styleDefault();
      GoogleAnalytics.startTrackerWithId('UA-90237421-1').then(
        () => {
          console.log('GoogleAnalytics configured');
        }
      );
      GoogleAnalytics.setAppVersion('market 1.0');
      GoogleAnalytics.debugMode();
      this.init();
      Splashscreen.hide();
    });
  }

   init() {
    this.fireAuth.subscribe(data => {
      if (!data) {
        this.nav.setRoot(LoginPage);
      }else {
        GoogleAnalytics.setUserId(data.auth.uid);
        this.userService.setUser(data.auth.uid, data.auth.email);
        this.nav.setRoot(TabsPage);
      }
    }); 
  }
}
