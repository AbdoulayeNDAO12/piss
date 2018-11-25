import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConsultationService } from '../../Service/consultation.service';
import { HopitalService } from '../../Service/hopital.service';
import { PharmacieService } from '../../Service/pharmacie.service';
import { BeneficiaireService } from '../../Service/Benefiaire.service';
import { CompteService } from '../../Service/compte.service';
import { MedicamentService } from '../../Service/medicament.service';
import { PrestataireService } from '../../Service/prestataire.service';
import { RemboursementService } from '../../Service/remboursement.service';
import { UserService } from '../../Service/utilisateur.service';
import { Consultation } from '../../models/Consultation.models';
import { Hopital } from '../../models/Hopital.models';
import { Pharmacie } from '../../models/Pharmacie.models';
import { Beneficiaire } from '../../models/Beneficiaire.models';
import { Prestataire } from '../../models/Prestataire.models';
import { Remboursement } from '../../models/Remboursement.models';
import { Subscription } from 'rxjs/Subscription';
import { Medicament_Consultation } from '../../models/medicament_consultation.model';
import { Medicament_ConsultationService } from '../../Service/medicament_consultation.service';
import { NotificationPage } from '../notification/notification';
import { AccueilPage } from '../accueil/accueil';
import { Medicament } from '../../models/Medicament.models';


/**
 * Generated class for the VenteMedicamentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vente-medicament',
  templateUrl: 'vente-medicament.html',
})
export class VenteMedicamentPage {
  public form: FormGroup;
  consultationList: Consultation[];
  consultationSubscription: Subscription;
  hopitalSubscription: Subscription;
  hopitalList: Hopital[];
  pharmacieSubscription: Subscription;
  pharmacieList: Pharmacie[];
  beneficiaireSubscription: Subscription;
  beneficiaireList: Beneficiaire[];
  prestataireSubscription: Subscription;
  prestataireList: Prestataire[];
  remboursementSubscription: Subscription;
  remboursementList: Remboursement[];
  medicament_consultationSubscription: Subscription;
  medicament_consultationList: Medicament_Consultation[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private _FB: FormBuilder, private consultationService: ConsultationService, private hopitalService: HopitalService,
    private pharmacieService: PharmacieService, private toastCtrl: ToastController, private beneficiaireService: BeneficiaireService,
    private compteSevice: CompteService, private medicamentService: MedicamentService, private prestataireService: PrestataireService,
    private remboursementService: RemboursementService, private loadingCtrl: LoadingController, private utilisateurService: UserService, private medicament_consultationService: Medicament_ConsultationService) {
}
initForm() {
  this.form = this._FB.group({
    montant:['', Validators.required]
  });
}
  ngOnInit() {
    this.initForm();
    this.consultationService.retrieveData().then(
      () => {
        this.consultationSubscription = this.consultationService.consultation$.subscribe(
          (consultation: Consultation[]) => {
            this.consultationList = consultation.slice();
          }
        );
        this.consultationService.emitConsultation();
      },
      (error) => {

      }
    );
    this.hopitalService.retrieveData().then(
      () => {
        this.hopitalSubscription = this.hopitalService.hopital$.subscribe(
          (hopital: Hopital[]) => {
            this.hopitalList = hopital.slice();
          }
        );
        this.hopitalService.emitHopital();
      },
      (error) => {

      }
    );
    this.pharmacieService.retrieveData().then(
      () => {
        this.pharmacieSubscription = this.pharmacieService.Pharmacie$.subscribe(
          (pharmacie: Pharmacie[]) => {
            this.pharmacieList = pharmacie.slice();
          }
        );
        this.pharmacieService.emitPharmacie();
      },
      (error) => {

      }
    );
    this.beneficiaireService.retrieveData().then(
      () => {
        this.beneficiaireSubscription = this.beneficiaireService.beneficiaire$.subscribe(
          (beneficiaire: Beneficiaire[]) => {
            this.beneficiaireList = beneficiaire.slice();
          }
        );
        this.beneficiaireService.emitBeneficiaire();
      },
      (error) => {

      }
    );
    this.prestataireService.retrieveData().then(
      () => {
        this.prestataireSubscription = this.prestataireService.prestataire$.subscribe(
          (prestataire: Prestataire[]) => {
            this.prestataireList = prestataire.slice();
          }
        );
        this.prestataireService.emitPrestataire();
      },
      (error) => {

      }
    );
    this.remboursementService.retrieveData().then(
      () => {
        this.remboursementSubscription = this.remboursementService.remboursement$.subscribe(
          (remboursement: Remboursement[]) => {
            this.remboursementList = remboursement.slice();
          }
        );
        this.remboursementService.emitRemboursement();
      },
      (error) => {

      }
    );
    this.medicament_consultationService.retrieveData().then(
      () => {
        this.medicament_consultationSubscription = this.medicament_consultationService.Medicament_Consultation$.subscribe(
          (medicament_consultation: Medicament_Consultation[]) => {
            this.medicament_consultationList = medicament_consultation.slice();
          }
        );
        this.medicament_consultationService.emitMedicament_Consultation();
      },
      (error) => {

      }
    );
  }


  onSubmitForm() {
    const montant = this.form.get('montant').value;
    const medicament = new Medicament(1, '', 1, montant, 1);
    this.medicamentService.addMedicament(medicament);


    let loader1 = this.loadingCtrl.create({
      content: 'Sauvegarde en cours…'
    });
    loader1.present();
    this.medicamentService.saveData().then(
      () => {


        loader1.dismiss();
        this.toastCtrl.create({
          message: 'Données sauvegardées !',
          duration: 3000,
          position: 'bottom'
        }).present();
      },
      (error) => {
        loader1.dismiss();
        this.toastCtrl.create({
          message: error,
          duration: 3000,
          position: 'bottom'
        }).present();
      }
    );
    this.navCtrl.push(AccueilPage);

  }
  initMontantFields(): FormGroup {
    return this._FB.group({
      sum: ['', Validators.required]
    });
  }
  getHobbies(): FormArray {
    return this.form.get('montant') as FormArray;
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad VenteMedicamentPage');
  }

}
