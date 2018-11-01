import {Component} from '@angular/core';
import { ParrainageEnfantPage} from '../parrainageEnfant/parrainageEnfant';
import { NavController } from 'ionic-angular';
import { DonParrainagePage } from '../donParrainage/donParrainage';
import { HistoriqueParrainagePage } from '../historiqueParrainage/historiqueParrainage';
import { InfosParrainagePage } from '../infosParrainage/infosParrainage';
import { ParrainageInstitutionPage } from '../parrainageInstitution/parrainageInstitution';

@Component({
    selector: 'page-accueilParrainage',
    templateUrl: 'accueilParrainage.html'
})
export class AccueilParrainagePage{
    
    constructor(public navCtrl: NavController){
    }
    onGoToParrainageEnfantPage(){
        this.navCtrl.push(ParrainageEnfantPage);
    }

    onGoToParrainageInstitutionPage(){
        this.navCtrl.push(ParrainageInstitutionPage);
    }
    onGoToComptePage(){
        this.navCtrl.push(ParrainageEnfantPage);
    }
    onGoToHistoriquePage(){
        this.navCtrl.push(HistoriqueParrainagePage);
    }
    onGoToFaireDonPage(){
        this.navCtrl.push(DonParrainagePage);
    }
    onGoToInfosPage(){
        this.navCtrl.push(InfosParrainagePage);
    }
}