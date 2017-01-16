import { ElementsService } from './../../providers/elements-service';
import { ScannerService } from './../../providers/scanner-service';
import { GoogleAnalytics } from 'ionic-native';
import { FirebaseAuth } from 'angularfire2';
import { Component, OnInit } from '@angular/core';
import { Element } from '../../model/element';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  elements: Array<Element>;

  code: string;

  constructor(
    private fireAuth: FirebaseAuth, 
    private scannerService: ScannerService,
    private elementsService: ElementsService) {}

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

}
