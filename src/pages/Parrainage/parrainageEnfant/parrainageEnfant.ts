import {Component, OnInit, OnDestroy} from '@angular/core';
import { NavController, ToastController, LoadingController, ModalController } from 'ionic-angular';
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
    constructor(public navCtrl: NavController,private filleulService: FilleulService,
        private toastCtrl: ToastController,
        private loadingCtrl: LoadingController,private modalCtrl: ModalController ){
    }
    ngOnInit() {
        this.filleulService.retrieveData().then(
            () => {
              this.filleulSubscription = this.filleulService.filleul$.subscribe(
                (filleul: Filleul[]) => {
                  this.filleulList = filleul.slice();
                }
              );
              this.filleulService.emitFilleul();
            }
          );
        
      }

    onGoToHistoire(filleul: Filleul){
        this.navCtrl.push(HistoireFilleulPage,{filleul: filleul});
    }
    onLoadFilleul(index: number) {
      let modal = this.modalCtrl.create(FormParrainageEnfantPage, {index: index});
      modal.present();
    }

    onGoToParraineMoi(filleul: Filleul){
        this.navCtrl.push(FormParrainageEnfantPage, {filleul: filleul});
    }
    ngOnDestroy() {
        this.filleulSubscription.unsubscribe();
      }
}

