import { Component } from '@angular/core';
import { ProxyService } from '@raguilera82/angular-github-library';

@Component({
  selector: 'page-people',
  templateUrl: 'people.html'
})
export class PeoplePage {

  users: any[];

  constructor(private proxy: ProxyService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PeoplePage');
    this.proxy.getUsers().subscribe((response) => {
      this.users = response.json();
    });
  }


}
