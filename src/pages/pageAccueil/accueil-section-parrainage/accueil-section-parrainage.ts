import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AccueilParrainagePage } from '../../Parrainage/accueilParrainage/accueilParrainage';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccueilSectionParrainagePage');
  }

  onGoToParrainage(){
    this.navCtrl.push(AccueilParrainagePage);
  }

}
