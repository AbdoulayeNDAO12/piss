import {Component} from '@angular/core';
import { ParrainageEnfantPage} from '../parrainageEnfant/parrainageEnfant';
import { NavController , MenuController} from 'ionic-angular';
import { ParrainageInstitutionPage } from '../parrainageInstitution/parrainageInstitution';
import { AccueilPage } from '../../pageAccueil/accueil/accueil';
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
    
    onToggleMenu(){
        this.menuCtrl.open() ;
      }
}