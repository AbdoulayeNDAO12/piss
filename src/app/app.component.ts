import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { AuthPage } from '../pages/auth/auth';
import * as firebase from 'firebase';
import { platformBrowser } from '@angular/platform-browser';
import {AccueilParrainagePage} from '../pages/Parrainage/accueilParrainage/accueilParrainage';
import { ZakatPage } from '../pages/zakat/zakat';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = AuthPage;
  authPage: AuthPage;
  zakatPage: any = ZakatPage;
  @ViewChild('content') content: NavController;
  accueilParrainagePage = AccueilParrainagePage;

  constructor(platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private menuCtrl: MenuController) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      var config = {
        apiKey: "AIzaSyBSiXlXqHR0_CjRjllbtHmKJycJtIxJlJ4",
        authDomain: "piss-fd1b5.firebaseapp.com",
        databaseURL: "https://piss-fd1b5.firebaseio.com",
        projectId: "piss-fd1b5",
        storageBucket: "",
        messagingSenderId: "1090307730027"
      };
      firebase.initializeApp(config);
    });
  }

  onNavigate(page: any, data?: {}) {
    this.content.setRoot(page, data ? data : null);
    this.menuCtrl.close();
  }
}
