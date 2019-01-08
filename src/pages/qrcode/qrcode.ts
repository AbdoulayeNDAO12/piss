import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';
import { UserService } from '../../Service/utilisateur.service';
import { Subscription } from 'rxjs';
import { Utilisateur } from '../../models/Utilisateur.models';
import { Filleul } from '../../models/Filleul.model';
import { ParrainService } from '../../Service/parrain.service';
import { FilleulService } from '../../Service/filleul.service';
import { ConsutationMaladePage } from '../consutation-malade/consutation-malade';
import { VenteMedicamentPage } from '../vente-medicament/vente-medicament';
import { MenuController } from 'ionic-angular/components/app/menu-controller';

/**
 * Generated class for the QrcodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qrcode',
  templateUrl: 'qrcode.html',
})
export class QrcodePage {
  utilisateur: Utilisateur
  selectedMalade: Utilisateur;
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
    private toast: Toast,private menuCtrl:MenuController) {
  }
  ngOnInit() {

    this.utilisateur = this.navParams.get('utilisateur');
    if (this.utilisateur != null) {
      this.type = this.utilisateur.type_user;
      this.profession = this.utilisateur.profession;
      this.createdCode = this.utilisateur.email;
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
      if (this.selectedMalade !== undefined) {
        this.MaladeFound = true;
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
      if (this.selectedMalade !== undefined) {
        this.MaladeFound = true;
      } else {
        this.selectedMalade = null;
        this.MaladeFound = false;
        this.toast.show('Personne inexistante pas dans la base de données', '5000', 'center').subscribe(
          toast => {

          }
        );
      }
    }, (err) => {
      this.toast.show(err, '5000', 'center').subscribe(
        toast => {

        }
      );
    });
  }
  onToggleMenu() {
    this.menuCtrl.open();
}
  onGotoConsultation() {
    this.navCtrl.push(ConsutationMaladePage,{utilisateur:this.utilisateur,malade:this.selectedMalade});
  }
  onGotoVente() {
    this.navCtrl.push(VenteMedicamentPage,{utilisateur:this.utilisateur,malade:this.selectedMalade});
  }

ionViewDidLoad() {
    console.log('ionViewDidLoad QrcodePage');
  }

}
