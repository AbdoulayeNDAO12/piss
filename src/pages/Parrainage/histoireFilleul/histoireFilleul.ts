import {Component} from '@angular/core';
import { ParrainageEnfantPage } from '../parrainageEnfant/parrainageEnfant';
import { NavController, MenuController } from 'ionic-angular';

@Component({
    selector: 'page-histoireFilleul',
    templateUrl: 'histoireFilleul.html'
})
export class HistoireFilleulPage{

    constructor(public navCtrl: NavController,public menuCtrl:MenuController){
    }
    
    onGoToParraineMoi(){
    this.navCtrl.push(ParrainageEnfantPage);
}
}

