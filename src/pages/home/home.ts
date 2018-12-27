import { Component } from '@angular/core';
import { NavController,MenuController, NavParams } from 'ionic-angular';
import { Utilisateur } from '../../models/Utilisateur.models';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  filleul:Utilisateur
  constructor(public navCtrl: NavController,public navParams: NavParams,public menuCtrl:MenuController) {

  }
 
  onToggleMenu() {
    this.menuCtrl.open();
  }

}
