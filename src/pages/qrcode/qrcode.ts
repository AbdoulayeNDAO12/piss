import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';
import { UserService } from '../../Service/utilisateur.service';
import { Subscription } from 'rxjs';
import { Utilisateur } from '../../models/Utilisateur.models';

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
  products: any[];
  selectedProduct: any;
  productFound: boolean = false;
  qrData = null;
  createdCode = "pathe";
  scannedCode = null;
  utilisateurSubscription: Subscription;
  utilisateurList: Utilisateur[];

  constructor(public navCtrl: NavController,
    private barcodeScanner: BarcodeScanner,
    private toast: Toast,private utilisateurService: UserService) {
    
  }
  ngOnInit() {
   
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
  scan() {
  this.selectedProduct = {};
  this.barcodeScanner.scan().then((barcodeData) => {
    this.selectedProduct = this.products.find(product => product.plu === barcodeData.text);
    if(this.selectedProduct !== undefined) {
      this.productFound = true;
    } else {
      this.productFound = false;
      this.toast.show(`Product not found`, '5000', 'center').subscribe(
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
    console.log('ionViewDidLoad QrcodePage');
  }

}
