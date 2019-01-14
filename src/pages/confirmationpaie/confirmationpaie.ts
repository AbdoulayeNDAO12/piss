import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DonService } from '../../Service/don.service';
import { Don } from '../../models/Don.models';
import { Subscription } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

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
    private toastCtrl:ToastController, private httpClient: HttpClient) {
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


    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'PAYDUNYA-MASTER-KEY': 'CfrF4mIa-Q54d-8hmc-wIcO-FcSuYVZxTguW',
        'PAYDUNYA-PRIVATE-KEY': 'test_private_dbrrzKsdAuk7BZduawjBygXVENu',
        'PAYDUNYA-TOKEN': 'KnuCJZ0RMlDF7foZdm8j'
      })
    }

  var facture2 = {"token" : this.navParams.get("token"), "confirm_token" : code};
  var url1 = 'https://cors-anywhere.herokuapp.com/https://app.paydunya.com/sandbox-api/v1/opr/charge';
  var conf = this;
  //http request complete with url, json content and header
  this.httpClient.post(url1, JSON.stringify(facture2), httpOptions)
      .subscribe(
        (res) =>{
          var response_text = res['response_text'];
        
        console.log('Le paiement a fonctionné : '+ response_text);
        alert(response_text);
      },
      (error) => {
        console.log('Erreur !');
      });
    //this.navCtrl.push(ConfirmationpaiePage);
  
    
  }

}
