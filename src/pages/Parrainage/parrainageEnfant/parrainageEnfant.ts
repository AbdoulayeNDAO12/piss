import {Component, OnInit, OnDestroy} from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoireFilleulPage } from '../histoireFilleul/histoireFilleul';
import { FormParrainageEnfantPage } from '../formParrainageEnfant/formParrainageEnfant';
import { Filleul } from '../../../models/Filleul.model';
import { Subscription } from 'rxjs/Subscription';
import { FilleulService } from '../../../Service/filleul.service';

@Component({
    selector: 'page-parrainageEnfant',
    templateUrl: 'parrainageEnfant.html'
})
export class ParrainageEnfantPage implements OnInit,OnDestroy{

    filleulList: Filleul[];
    filleulSubscription: Subscription;
    constructor(public navCtrl: NavController,private filleulService: FilleulService ){
    }
    ngOnInit() {
        this.filleulSubscription = this.filleulService.filleul$.subscribe(
          (filleul: Filleul[]) => {
            this.filleulList = filleul.slice();
          }
        );
        this.filleulService.emitFilleul();
      }

    onGoToHistoire(){
        this.navCtrl.push(HistoireFilleulPage);
    }

    onGoToParraineMoi(){
        this.navCtrl.push(FormParrainageEnfantPage);
    }
    ngOnDestroy() {
        this.filleulSubscription.unsubscribe();
      }
}

