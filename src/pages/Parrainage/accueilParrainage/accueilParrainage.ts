import {Component} from '@angular/core';
import { ParrainageEnfantPage} from '../parrainageEnfant/parrainageEnfant';
import { NavController , MenuController, IonicPage} from 'ionic-angular';
import { ParrainageInstitutionPage } from '../parrainageInstitution/parrainageInstitution';


@IonicPage({
  
})
@Component({
    selector: 'page-accueilParrainage',
    templateUrl: 'accueilParrainage.html'
})
export class AccueilParrainagePage{  
    
    constructor(public navCtrl: NavController,public menuCtrl:MenuController){
    }
    onGoToParrainageEnfantPage(){
        this.navCtrl.push(ParrainageEnfantPage);
    }

    onGoToParrainageInstitutionPage(){
        this.navCtrl.push(ParrainageInstitutionPage);
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad AccueilParrainagePage');
      }
    
    onToggleMenu(){
        this.menuCtrl.open() ;
      }
}