import { LocalNotificationsPage } from './../pages/local-notifications/local-notifications';
import { PeoplePage } from './../pages/people/people';
import { CaritaPage } from './../pages/carita/carita';
import { ElementsService } from './../providers/elements-service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, LOCALE_ID, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { ReactiveFormsModule } from '@angular/forms';
import { GithubModule } from '@raguilera82/angular-github-library';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { CartPage } from './../pages/cart/cart';
import { TabsPage } from './../pages/tabs/tabs';
import { CartService } from '../providers/cart-service';
import { UserService } from '../providers/user-service';
import { ScannerService } from '../providers/scanner-service';
import { ToastService } from '../providers/toast-service';

const FIREBASE_CONFIG = {
    apiKey: "AIzaSyD24HG4JTZ-rl4N1vG3qsJIqk1xt9c_pBQ",
    authDomain: "market-4b6d2.firebaseapp.com",
    databaseURL: "https://market-4b6d2.firebaseio.com",
    storageBucket: "market-4b6d2.appspot.com",
    messagingSenderId: "289036516322"
};

const FIREBASE_AUTH_CONFIG = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    TabsPage,
    CartPage,
    CaritaPage,
    PeoplePage,
    LocalNotificationsPage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG, FIREBASE_AUTH_CONFIG),
    ReactiveFormsModule,
    GithubModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    TabsPage,
    CartPage,
    CaritaPage,
    PeoplePage,
    LocalNotificationsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
  {provide: LOCALE_ID, useValue: 'es'}, 
  CartService, UserService, ScannerService, ElementsService, ToastService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
