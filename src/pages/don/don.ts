import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController, ToastController } from 'ionic-angular';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { DonService } from '../../Service/don.service';
import { Don } from '../../models/Don.models';
import { AccueilPage } from '../pageAccueil/accueil/accueil';
import { Subscription } from 'rxjs/Subscription';
import { ConfirmationpaiePage } from '../confirmationpaie/confirmationpaie';

/**
 * Generated class for the DonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  
})
@Component({
  selector: 'page-don',
  templateUrl: 'don.html',
})
export class DonPage {
  donForm: FormGroup;
  don:Don;
  donList: Don[];
  donSubscription: Subscription;
  valid: true;
  invalid: false;

  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder:FormBuilder,
    private menuCtrl:MenuController,private donService:DonService,private loadingCtrl:LoadingController,
    private toastCtrl:ToastController) {
  }
  initForm() {
    this.donForm = this.formBuilder.group({
      don: ['', Validators.required],
      telephone: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.initForm();
   
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }


  onSubmitForm() {
    const don = this.donForm.get('don').value;
    const telephone = this.donForm.get('telephone').value;

  
    this.navCtrl.push(ConfirmationpaiePage,{don:don});
  
    
  }
}
