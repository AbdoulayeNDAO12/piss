import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController, ToastController } from 'ionic-angular';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { DonService } from '../../Service/don.service';
import { Don } from '../../models/Don.models';
<<<<<<< HEAD
import { AccueilPage } from '../pageAccueil/accueil/accueil';
=======
import { AccueilPage } from '../pageAccueil/accueil/accueil';
import { Subscription } from 'rxjs/Subscription';
>>>>>>> eaaa00a64e31e0c925f5e0e17972aba1b273c057

/**
 * Generated class for the DonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-don',
  templateUrl: 'don.html',
})
export class DonPage {
  donForm: FormGroup;
  don:Don;
  donList: Don[];
  donSubscription: Subscription;

  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder:FormBuilder,
    private menuCtrl:MenuController,private donService:DonService,private loadingCtrl:LoadingController,
    private toastCtrl:ToastController) {
  }
  initForm() {
    this.donForm = this.formBuilder.group({
      don: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.initForm();
    this.donService.retrieveData().then(
      () => {
        this.donSubscription = this.donService.don$.subscribe(
          (don: Don[]) => {
            this.donList = don.slice();
          }
        );
        this.donService.emitDon();
      },
      (error) => {
        
      }
    );
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }


  onSubmitForm() {
    const don = this.donForm.get('don').value;
    this.don= new Don(this.donService.donList.length+1,don,"Don",new Date());
    this.donService.addDon(this.don);
    let loader = this.loadingCtrl.create({
      content: ''
    });
    loader.present();
    this.donService.saveData().then(
      () => {
        loader.dismiss();
        this.toastCtrl.create({
          message: 'Données sauvegardées !',
          duration: 3000,
          position: 'bottom'
        }).present();
      },
      (error) => {
        loader.dismiss();
        this.toastCtrl.create({
          message: error,
          duration: 3000,
          position: 'bottom'
        }).present();
      }
    );
    this.navCtrl.push(AccueilPage);
  
    
  }
  ngOnDestroy() {
    this.donSubscription.unsubscribe();
   
  }
}
