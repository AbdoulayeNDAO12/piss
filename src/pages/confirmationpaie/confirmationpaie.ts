import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DonService } from '../../Service/don.service';
import { Don } from '../../models/Don.models';
import { Subscription } from 'rxjs';

/**
 * Generated class for the ConfirmationpaiePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirmationpaie',
  templateUrl: 'confirmationpaie.html',
})
export class ConfirmationpaiePage {
  confForm: FormGroup;
  valid: true;
  invalid: false;
  dons:number
  don:Don;
  donList: Don[];
  donSubscription: Subscription;
  

  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder:FormBuilder,
    private menuCtrl:MenuController,private donService:DonService,private loadingCtrl:LoadingController,
    private toastCtrl:ToastController) {
  }
  initForm() {
    this.confForm = this.formBuilder.group({
      code: ['', Validators.required],
    });
  }
  ngOnInit() {
    this.initForm();
    this.dons=this.navParams.get("don");
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmationpaiePage');
  }


  onSubmitForm() {
    const code = this.confForm.get('code').value;

    const don= new Don(this.donService.donList.length+1,this.dons,"Don",new Date());
    this.donService.addDon(don);
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
    this.navCtrl.push(ConfirmationpaiePage);
  
    
  }

}
