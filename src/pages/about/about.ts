import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { AccueilParrainagePage } from '../Parrainage/accueilParrainage/accueilParrainage';
import { ZakatPage } from '../zakat/zakat';
import { AccueilAssurancePage } from '../pageAccueil/accueil-assurance/accueil-assurance';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public menuCtrl:MenuController) {

  }

  onGoToSectionAssurance(){
    this.navCtrl.push(AccueilAssurancePage);
  }

  onGoToSectionParrainage(){
    this.navCtrl.push(AccueilParrainagePage);
  }

  onGoToSectionZakat(){
    this.navCtrl.push(ZakatPage);
  }

  onToggleMenu(){
    this.menuCtrl.open() ;
  }

}
