import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { AccueilSectionAssurancePage } from '../pageAccueil/accueil-section-assurance/accueil-section-assurance';
import { AccueilSectionParrainagePage } from '../pageAccueil/accueil-section-parrainage/accueil-section-parrainage';
import { AccueilParrainagePage } from '../Parrainage/accueilParrainage/accueilParrainage';
import { ZakatPage } from '../zakat/zakat';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public menuCtrl:MenuController) {

  }

  onGoToSectionAssurance(){
    this.navCtrl.push(AccueilSectionAssurancePage);
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
