import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Utilisateur } from '../../../models/Utilisateur.models';
import { Subscription } from 'rxjs';
import { UserService } from '../../../Service/utilisateur.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';
import { ConsutationMaladePage } from '../../consutation-malade/consutation-malade';
import { VenteMedicamentPage } from '../../vente-medicament/vente-medicament';
import { AccueilParrainagePage } from '../../Parrainage/accueilParrainage/accueilParrainage';
import { AccueilAssurancePage } from '../accueil-assurance/accueil-assurance';

/**
 * Generated class for the AccueilSectionAssurancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accueil-section-assurance',
  templateUrl: 'accueil-section-assurance.html',
})
export class AccueilSectionAssurancePage {

 
  rootNavCtrl: NavController;
  
  utilisateur:Utilisateur
  selectedMalade:Utilisateur;
  type: string;
  utilisateurSubscription: Subscription;
  utilisateurList: Utilisateur[];
  MaladeFound: boolean;
  qrData = null;
  createdCode = null;
  scannedCode = null;
  profession: string;
   
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private utilisateurService: UserService, private barcodeScanner: BarcodeScanner,
    private toast: Toast) {
      this.rootNavCtrl = this.navParams.get('rootNavCtrl');
    }
  

  onGoToParrainageEnfantPage(){
    this.navCtrl.push(AccueilParrainagePage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AccueilSectionAssurancePage');
  }

  onGoToAccueilAssurancePage(){
    this.rootNavCtrl.push(AccueilAssurancePage);
  }

}
