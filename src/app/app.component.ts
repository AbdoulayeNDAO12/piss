import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController, LoadingController, ToastController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { AuthPage } from '../pages/auth/auth';
import * as firebase from 'firebase';
import * as paydunya from 'paydunya';
import { platformBrowser } from '@angular/platform-browser';
import {AccueilParrainagePage} from '../pages/Parrainage/accueilParrainage/accueilParrainage';
import { ZakatPage } from '../pages/zakat/zakat';
import { DonPage } from '../pages/don/don';
import { ConsutationMaladePage } from '../pages/consutation-malade/consutation-malade';
import { VenteMedicamentPage } from '../pages/vente-medicament/vente-medicament';

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;
  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[] = [
    { title: 'Accueil', pageName: 'AccueilPage', tabComponent: 'TabsPage', index: 0, icon: 'home' },
    { title: 'Connexion', pageName: 'AuthPage', icon: 'log-in' },
    { title: 'Compte', pageName: ' DonPage', icon: 'person' },
    { title: 'Assurance', pageName: 'ConsutationMaladePage', icon: 'medkit' },
    { title: 'Parrainage', pageName: 'AccueilParrainagePage',icon: 'people' },
    { title: 'Zakat', pageName: 'ZakatPage', icon: 'cash' },
    { title: 'Don', pageName: 'DonPage', icon: 'cash' },
    { title: 'Réglages', pageName: 'AccueilPage', tabComponent: 'TabsPage', index: 0, icon: 'settings' },
    { title: 'Historique', pageName: 'VenteMedicamentPage', icon: 'list' },
    { title: 'Déconnexion', pageName: 'AccueilPage', icon: 'log-out' },
  ];



  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl: MenuController) {
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

      /*var setup = new paydunya.Setup({
        masterKey: 'wQzk9ZwR-Qq9m-0hD0-zpud-je5coGC3FHKW',
        privateKey: 'test_private_rMIdJM3PLLhLjyArx9tF3VURAF5',
        publicKey: 'test_public_kb9Wo0Qpn8vNWMvMZOwwpvuTUja-OSDNhUqKoaTI4wc',
        token: 'IivOiOxGJuWhc5znlIiK',
        mode: 'test' // optional. use in sandbox mode.
      });*/
    });
  }


  openPage(page: PageInterface) {
    let params = {};

    if (page.index) {
      params = { tabIndex: page.index };
    }
 
    // The active child nav is our Tabs Navigation
    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else {
      // Tabs are not active, so reset the root page 
      // In this case: moving to or from SpecialPage
      this.nav.setRoot(page.pageName, params);
    }
  }

  isActive(page: PageInterface) {
    // Again the Tabs Navigation
    let childNav = this.nav.getActiveChildNav();
 
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }
 
    // Fallback needed when there is no active childnav (tabs not active)
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }

}
