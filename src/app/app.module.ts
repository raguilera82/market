
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { ReactiveFormsModule } from '@angular/forms';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { CartPage } from './../pages/cart/cart';
import { TabsPage } from './../pages/tabs/tabs';
import { CartService } from '../providers/cart-service';
import { UserService } from '../providers/user-service';

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
    CartPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG, FIREBASE_AUTH_CONFIG),
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    TabsPage,
    CartPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, CartService, UserService]
})
export class AppModule {}
