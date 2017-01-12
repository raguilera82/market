import { GoogleAnalytics } from 'ionic-native';
import { FirebaseAuth } from 'angularfire2';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit {

  form: FormGroup;

  email: string;
  password: string;
  error: string;

  constructor(
    private navCtrl: NavController, 
    private navParams: NavParams, 
    private fireAuth: FirebaseAuth,
    private alertCtrl: AlertController) {}

  ngOnInit() {
    console.log('En el OnInit de login');
    this.form = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  ionViewWillEnter() {
    GoogleAnalytics.trackView('Login');
  }

  login() {
    this.fireAuth.login({email: this.form.get('email').value, password: this.form.get('password').value})
    .then(data => {
      this.navCtrl.setRoot(TabsPage);
    })
    .catch(error => {
      this.showError(error);
    })
  }

  register() {
    this.fireAuth.createUser({email: this.form.get('email').value, password: this.form.get('password').value})
    .then((authData) => {
      let prompt = this.alertCtrl.create({
        title: 'Success',
        subTitle: 'Your new Account was created!',
        buttons: ['OK']
      });
      prompt.present();
    }).catch((error) => {
      this.showError(error);
    });
  }

  showError(text) {

    let prompt = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    prompt.present();
  }

}
