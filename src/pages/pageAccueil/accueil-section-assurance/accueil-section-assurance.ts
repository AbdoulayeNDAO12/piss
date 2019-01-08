import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Utilisateur } from '../../../models/Utilisateur.models';
import { Subscription } from 'rxjs';
import { UserService } from '../../../Service/utilisateur.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';
import { ConsutationMaladePage } from '../../consutation-malade/consutation-malade';
import { VenteMedicamentPage } from '../../vente-medicament/vente-medicament';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, private utilisateurService: UserService,private barcodeScanner: BarcodeScanner, private toast: Toast) {
    this.rootNavCtrl = this.navParams.get('rootNavCtrl');
  }
  ngOnInit() {
   
    this.utilisateur = this.navParams.get('utilisateur'); 
    if(this.utilisateur!=null){
      this.type=this.utilisateur.type_user;
      this.profession=this.utilisateur.profession;
      this.createdCode=this.utilisateur.email;
    }
    this.utilisateurService.retrieveData().then(
      () => {
        this.utilisateurSubscription = this.utilisateurService.utilisateur$.subscribe(
          (utilisateur: Utilisateur[]) => {
            this.utilisateurList = utilisateur.slice();
          }
        );
        this.utilisateurService.emitUser();
      },
      (error) => {

      }
    );
      
    
  }
  scanMedecin() {
    this.selectedMalade = null;
    this.barcodeScanner.scan().then((barcodeData) => {
      this.selectedMalade = this.utilisateurList.find(malade => malade.email === barcodeData.text);
      if(this.selectedMalade !== undefined) {
        this.MaladeFound = true;
        console.log(this.selectedMalade);
        
        this.navCtrl.push(ConsutationMaladePage,{utilisateur:this.utilisateur,malade:this.selectedMalade});
      } else {
        this.selectedMalade = null;
        this.MaladeFound = false;
        this.toast.show('Personne existante pas dans la base de données', '5000', 'center').subscribe(
          toast => {
            console.log(toast);
          }
        );
      }
    }, (err) => {
      this.toast.show(err, '5000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      );
    });
  }
  scanPharmacien() {
    this.selectedMalade = null;
    this.barcodeScanner.scan().then((barcodeData) => {
      this.selectedMalade = this.utilisateurList.find(malade => malade.email === barcodeData.text);
      if(this.selectedMalade !== undefined) {
        this.MaladeFound = true;
        console.log(this.selectedMalade);
        
        this.navCtrl.push(VenteMedicamentPage,{utilisateur:this.utilisateur,malade:this.selectedMalade});
      } else {
        this.selectedMalade = null;
        this.MaladeFound = false;
        this.toast.show('Personne existante pas dans la base de données', '5000', 'center').subscribe(
          toast => {
            console.log(toast);
          }
        );
      }
    }, (err) => {
      this.toast.show(err, '5000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      );
    });
  }
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccueilSectionAssurancePage');
  }

  onGoToAccueilAssurancePage(){
    this.rootNavCtrl.push(AccueilAssurancePage);
  }

}
