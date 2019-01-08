import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { AccueilPage } from '../pageAccueil/accueil/accueil';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public menuCtrl:MenuController) {

  }

  onToggleMenu(){
    this.menuCtrl.open() ;
  }

}
