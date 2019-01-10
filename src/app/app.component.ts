import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController, LoadingController, ToastController, Nav, IonicPage } from 'ionic-angular';
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
import { QrcodePage } from '../pages/qrcode/qrcode';
import { isDefaultChangeDetectionStrategy } from '@angular/core/src/change_detection/constants';
import { AccueilPage } from '../pages/pageAccueil/accueil/accueil';
import { AccueilAssurancePage } from '../pages/pageAccueil/accueil-assurance/accueil-assurance';
import { HistoriquePage } from '../pages/historique/historique';
import { ReglagesPage } from '../pages/reglages/reglages';
import { ComptePage } from '../pages/compte/compte';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;
  authPage :any= AuthPage;
  zakatPage: any = ZakatPage;
  accueilPage: any = AccueilPage;
  qrcodepage:any = QrcodePage;
  consutationMaladePage :any = ConsutationMaladePage;
  venteMedicamentPage :any = VenteMedicamentPage;
  @ViewChild('content') content: NavController;
  accueilParrainagePage :any = AccueilParrainagePage;
  accueilAssurancePage :any = AccueilAssurancePage;
  donPage :any = DonPage;
  qrcodePage:any=QrcodePage;
  historiquePage :any = HistoriquePage;
  reglagesPage :any = ReglagesPage;
  comptePage :any = ComptePage;
  
  isAuth:boolean;
  
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
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isAuth = true;
        
      } else {
        this.isAuth = false;
        this.content.setRoot(this.rootPage);
        
      }
    });


    /*var setup = new paydunya.Setup({
      masterKey: 'wQzk9ZwR-Qq9m-0hD0-zpud-je5coGC3FHKW',
      privateKey: 'test_private_rMIdJM3PLLhLjyArx9tF3VURAF5',
      publicKey: 'test_public_kb9Wo0Qpn8vNWMvMZOwwpvuTUja-OSDNhUqKoaTI4wc',
      token: 'IivOiOxGJuWhc5znlIiK',
      mode: 'test' // optional. use in sandbox mode.
    });*/
  });
}
  

onNavigate(page: any, data?: {}) {
  this.content.setRoot(page, data ? data : null);
  this.menuCtrl.close();
}
onDisconnect(){
    firebase.auth().signOut();
  }

}
