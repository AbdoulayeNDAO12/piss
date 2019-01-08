import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AuthPage } from '../../auth/auth';

/**
 * Generated class for the AccueilAssurancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accueil-assurance',
  templateUrl: 'accueil-assurance.html',
})
export class AccueilAssurancePage {

  rootNavCtrl: NavController;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl:MenuController) {
    this.rootNavCtrl = this.navParams.get('rootNavCtrl');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccueilAssurancePage');
  }
  onToggleMenu(){
    this.menuCtrl.open() ;
  }

  onGoToAuthPage(){
    this.rootNavCtrl.push(AuthPage);
  }

}
