import { FirebaseAuth } from 'angularfire2';
import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private fireAuth: FirebaseAuth) {}

  logout() {
    this.fireAuth.logout();
  }

}
