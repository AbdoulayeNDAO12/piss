import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ZakatPage } from '../../zakat/zakat';
import { SuperTabsController } from 'ionic2-super-tabs';

/**
 * Generated class for the AccueilSectionZakatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accueil-section-zakat',
  templateUrl: 'accueil-section-zakat.html',
})
export class AccueilSectionZakatPage {

  rootNavCtrl: NavController;

  constructor(public navCtrl: NavController, public navParams: NavParams, private superTabsCtrl: SuperTabsController) {
    this.rootNavCtrl = this.navParams.get('rootNavCtrl');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccueilSectionZakatPage');
  }

  onGoToZakatPage(){
    this.rootNavCtrl.push(ZakatPage);
  }

}
