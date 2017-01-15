import { ScannerService } from './../../providers/scanner-service';
import { GoogleAnalytics } from 'ionic-native';
import { FirebaseAuth } from 'angularfire2';
import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  code: string;

  constructor(private fireAuth: FirebaseAuth, private scannerService: ScannerService) {}

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

}
