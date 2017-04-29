import { Component, OnInit } from '@angular/core';
import { NavController, Platform, AlertController } from 'ionic-angular';
import * as moment from 'moment';
import { LocalNotifications } from '@ionic-native/local-notifications';

/*
  Generated class for the LocalNotifications page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-local-notifications',
  templateUrl: 'local-notifications.html'
})
export class LocalNotificationsPage implements OnInit {

  notifyTime: any;
  notifications: any[] = [];
  days: any[];
  chosenHours: number;
  chosenMinutes: number;

  constructor(public navCtrl: NavController, public platform: Platform,
    public alertCtrl: AlertController, private localNotifications: LocalNotifications) { }

  ngOnInit(): void {
    this.notifyTime = moment(new Date()).format();
    this.chosenHours = new Date().getHours();
    this.chosenMinutes = new Date().getMinutes();

    this.days = [
      { title: 'Monday', dayCode: 1, checked: false },
      { title: 'Tuesday', dayCode: 2, checked: false },
      { title: 'Wednesday', dayCode: 3, checked: false },
      { title: 'Thursday', dayCode: 4, checked: false },
      { title: 'Friday', dayCode: 5, checked: false },
      { title: 'Saturday', dayCode: 6, checked: false },
      { title: 'Sunday', dayCode: 0, checked: false }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocalNotificationsPage');
  }

  timeChange(time) {
    this.chosenHours = time.hour.value;
    this.chosenMinutes = time.minute.value;
  }

  addNotifications() {
    let currentDate = new Date();
    let currentDay = currentDate.getDay(); // Sunday = 0, Monday = 1, etc.

    for (let day of this.days) {

      if (day.checked) {

        let firstNotificationTime = new Date();
        let dayDifference = day.dayCode - currentDay;

        if (dayDifference < 0) {
          dayDifference = dayDifference + 7; // for cases where the day is in the following week
        }

        firstNotificationTime.setHours(firstNotificationTime.getHours() + (24 * (dayDifference)));
        firstNotificationTime.setHours(this.chosenHours);
        firstNotificationTime.setMinutes(this.chosenMinutes);

        let notification = {
          id: day.dayCode,
          title: 'Hey!',
          text: 'You just got notified :)',
          at: firstNotificationTime,
          every: 'week'
        };

        this.notifications.push(notification);

      }

    }

    console.log("Notifications to be scheduled: ", this.notifications);

    if (this.platform.is('cordova')) {

      // Cancel any existing notifications
      this.localNotifications.cancelAll().then(() => {

        // Schedule the new notifications
        this.localNotifications.schedule(this.notifications);

        this.notifications = [];

        let alert = this.alertCtrl.create({
          title: 'Notifications set',
          buttons: ['Ok']
        });

        alert.present(); let currentDate = new Date();
        let currentDay = currentDate.getDay(); // Sunday = 0, Monday = 1, etc.

        for (let day of this.days) {

          if (day.checked) {

            let firstNotificationTime = new Date();
            let dayDifference = day.dayCode - currentDay;

            if (dayDifference < 0) {
              dayDifference = dayDifference + 7; // for cases where the day is in the following week
            }

            firstNotificationTime.setHours(firstNotificationTime.getHours() + (24 * (dayDifference)));
            firstNotificationTime.setHours(this.chosenHours);
            firstNotificationTime.setMinutes(this.chosenMinutes);

            let notification = {
              id: day.dayCode,
              title: 'Hey!',
              text: 'You just got notified :)',
              at: firstNotificationTime,
              every: 'week'
            };

            this.notifications.push(notification);

          }

        }

        console.log("Notifications to be scheduled: ", this.notifications);

        if (this.platform.is('cordova')) {

          // Cancel any existing notifications
          this.localNotifications.cancelAll().then(() => {

            // Schedule the new notifications
            this.localNotifications.schedule(this.notifications);

            this.notifications = [];

            let alert = this.alertCtrl.create({
              title: 'Notifications set',
              buttons: ['Ok']
            });

            alert.present();

          });

        }

      });

    }
  }

  cancelAll() {
    this.localNotifications.cancelAll();

    let alert = this.alertCtrl.create({
      title: 'Notifications cancelled',
      buttons: ['Ok']
    });

    alert.present();
  }

}
