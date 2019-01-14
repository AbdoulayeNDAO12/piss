import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController, ToastController } from 'ionic-angular';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { DonService } from '../../Service/don.service';
import { Don } from '../../models/Don.models';
import { AccueilPage } from '../pageAccueil/accueil/accueil';
import { Subscription } from 'rxjs/Subscription';
import { ConfirmationpaiePage } from '../confirmationpaie/confirmationpaie';
import { HttpHeaders, HttpClient } from '@angular/common/http';

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
  confirmMessage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder:FormBuilder,
    private menuCtrl:MenuController,private donService:DonService,private loadingCtrl:LoadingController,
    private toastCtrl:ToastController,
    private httpClient: HttpClient) {
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

  
    // http function to send invoice to paydunya
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'PAYDUNYA-MASTER-KEY': 'CfrF4mIa-Q54d-8hmc-wIcO-FcSuYVZxTguW',
      'PAYDUNYA-PRIVATE-KEY': 'test_private_dbrrzKsdAuk7BZduawjBygXVENu',
      'PAYDUNYA-TOKEN': 'KnuCJZ0RMlDF7foZdm8j'
    })
  }

  var sommeP = don;
  let telP = telephone;
  String 

  //Creation of the json file
  var facture = {"invoice_data" : {"invoice": {"total_amount": sommeP, "description": "don zakat"},"store": {"name": "zakat nation"}},"opr_data" :{"account_alias" : telP}};
  var url1 = 'https://cors-anywhere.herokuapp.com/https://app.paydunya.com/sandbox-api/v1/opr/create';
  var conf = this;
  //http request complete with url, json content and header
  this.httpClient.post(url1, JSON.stringify(facture), httpOptions)
      .subscribe(
        (res) =>{
          var token = res['token'];
          var response_code = res['response_code'];
        
        console.log('La demandeconfirmMessage de facturation fonctionne :'+ token);
        alert(token);
        conf.confirmMessage = token;
        this.navCtrl.push(ConfirmationpaiePage,{don:don, token:token});
      },
      (error) => {
        console.log('Erreur !');
      });
  }
}
