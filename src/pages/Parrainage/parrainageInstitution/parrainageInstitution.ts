import {Component} from '@angular/core';
import { Institution } from '../../../models/Institution.models';
import { Subscription } from 'rxjs/Subscription';
import { NavController, ToastController, LoadingController } from 'ionic-angular';
import { FilleulService } from '../../../Service/filleul.service';
import { Filleul } from '../../../models/Filleul.model';
import { InstitutionService } from '../../../Service/institution.service';
import { FormParrainageInstitutionPage } from '../form-parrainage-institution/form-parrainage-institution';

@Component({
    selector: 'page-parrainageInstitution',
    templateUrl: 'parrainageInstitution.html'
})
export class ParrainageInstitutionPage{

    
    institutionList: Institution[];
    institutionSubscription: Subscription;
    constructor(public navCtrl: NavController,private institutionService: InstitutionService,
        private toastCtrl: ToastController,
        private loadingCtrl: LoadingController ){
    }
    ngOnInit() {
       
        this.institutionService.retrieveData().then(
            () => {
              this.institutionSubscription = this.institutionService.institution$.subscribe(
                (institution: Institution[]) => {
                  this.institutionList = institution.slice();
                }
              );
              this.institutionService.emitInstitution();
            },
            (error) => {
              
            }
          );
        this.institutionSubscription = this.institutionService.institution$.subscribe(
          (institution: Institution[]) => {
            this.institutionList = institution.slice();
          }
        );
        this.institutionService.emitInstitution();

      }
      onGoToParraineMoi(institution: Institution){
        this.navCtrl.push(FormParrainageInstitutionPage, {institution: institution});
    }
      ngOnDestroy() {
        this.institutionSubscription.unsubscribe();
      }

    
}