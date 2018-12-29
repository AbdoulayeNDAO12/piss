import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AccueilParrainagePage } from '../../Parrainage/accueilParrainage/accueilParrainage';
import { SuperTabsController } from 'ionic2-super-tabs';

/**
 * Generated class for the AccueilSectionParrainagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accueil-section-parrainage',
  templateUrl: 'accueil-section-parrainage.html',
})
export class AccueilSectionParrainagePage {

  rootNavCtrl: NavController;

  constructor(public navCtrl: NavController, public navParams: NavParams, private superTabsCtrl: SuperTabsController) {
    this.rootNavCtrl = this.navParams.get('rootNavCtrl');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccueilSectionParrainagePage');
  }

  onGoToParrainage(){
    this.rootNavCtrl.push(AccueilParrainagePage);
  }

}
