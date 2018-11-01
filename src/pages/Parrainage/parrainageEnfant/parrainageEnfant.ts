import {Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoireFilleulPage } from '../histoireFilleul/histoireFilleul';
import { FormParrainageEnfantPage } from '../formParrainageEnfant/formParrainageEnfant';

@Component({
    selector: 'page-parrainageEnfant',
    templateUrl: 'parrainageEnfant.html'
})
export class ParrainageEnfantPage{
    constructor(public navCtrl: NavController){
    }

    onGoToHistoire(){
        this.navCtrl.push(HistoireFilleulPage);
    }

    onGoToParraineMoi(){
        this.navCtrl.push(FormParrainageEnfantPage);
    }
}

