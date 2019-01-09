import {Component} from '@angular/core';
import { NavParams } from 'ionic-angular';
import { FilleulService } from '../../../Service/filleul.service';
import { Filleul } from '../../../models/Filleul.model';
import { NavController, MenuController } from 'ionic-angular';
import { FormParrainageEnfantPage } from '../formParrainageEnfant/formParrainageEnfant';

@Component({
    selector: 'page-histoireFilleul',
    templateUrl: 'histoireFilleul.html'
})
export class HistoireFilleulPage{
    filleul:Filleul;
    constructor(private navCtrl: NavController, private navParams:NavParams,private filleulService:FilleulService){

    }
    ngOnInit(){
        this.filleul = this.navParams.get('filleul');  
    }
    
    
    onGoToParraineMoi(filleul: Filleul){
        this.navCtrl.push(FormParrainageEnfantPage, {filleul: filleul});
    }
}

