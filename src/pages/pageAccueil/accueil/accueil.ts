import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the AccueilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html',
})
export class AccueilPage {
  assurance: any = 'AccueilSectionAssurancePage';
  parrainage: any = 'AccueilSectionParrainagePage';
  zakat: any = 'AccueilSectionZakatPage';
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl:MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccueilPage');
  }
  onToggleMenu(){
    this.menuCtrl.open() ;
  }

}
