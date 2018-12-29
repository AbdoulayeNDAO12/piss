import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ParrainageInstitutionPage } from '../parrainageInstitution/parrainageInstitution';

/**
 * Generated class for the DescriptionInstitutionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-description-institution',
  templateUrl: 'description-institution.html',
})
export class DescriptionInstitutionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DescriptionInstitutionPage');
  }

  onGoToNousParrainer(){
    this.navCtrl.push(ParrainageInstitutionPage);
  }

}
