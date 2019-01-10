import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, MenuController } from 'ionic-angular';
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
import { AccueilPage } from '../pageAccueil/accueil/accueil';
import { Utilisateur } from '../../models/Utilisateur.models';
import { Compte } from '../../models/Compte.models';


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
  consultationList: Consultation[]=[];
  consultationSubscription: Subscription;
  hopitalSubscription: Subscription;
  hopitalList: Hopital[]=[];
  compteSubscription: Subscription;
  compteListe: Compte[]=[];
  pharmacieSubscription: Subscription;
  pharmacieList: Pharmacie[]=[];
  beneficiaireSubscription: Subscription;
  beneficiaireList: Beneficiaire[]=[];
  prestataireSubscription: Subscription;
  prestataireList: Prestataire[]=[];
  remboursementSubscription: Subscription;
  remboursementList: Remboursement[]=[];
  medicament_consultationSubscription: Subscription;
  medicament_consultationList: Medicament_Consultation[]=[];
  utilisateur1: Utilisateur;
  malade: Utilisateur;
  i: number;
  compt: String[]=[];
  j: number;
  hopital: number;
  prestataire: Prestataire;
  utilisateurSubscription: Subscription;
  utilisateurList: Utilisateur[]=[];
  utilisateur: Utilisateur;
  medecin: Utilisateur;
  compte: Compte;
  indice: number;
  indice1: number;
  compt2: number[]=[];
  dice: number;
  indices: number;
  indices1: number;
  indices2: number;
  indices3: number;
  indices4: number;
  consultations: number;
  compt1: number;
  invalid=false;
  valid=true;

  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl:MenuController, private _FB: FormBuilder, private consultationService: ConsultationService, private hopitalService: HopitalService,
    private pharmacieService: PharmacieService, private toastCtrl: ToastController, private beneficiaireService: BeneficiaireService,
    private compteSevice: CompteService, private medicamentService: MedicamentService, private prestataireService: PrestataireService,
    private remboursementService: RemboursementService, private loadingCtrl: LoadingController, private utilisateurService: UserService, private medicament_consultationService: Medicament_ConsultationService) {
  }
  initForm() {
    this.form = this._FB.group({
      montant: ['', Validators.required]
    });
  }
  ngOnInit() {
    this.utilisateur1 = this.navParams.get('utilisateur');
    this.malade = this.navParams.get('malade');
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
    
    this.compteSevice.retrieveData().then(
      () => {
        this.compteSubscription = this.compteSevice.compte$.subscribe(
          (compte: Compte[]) => {
            this.compteListe = compte.slice();
          }
        );
        this.compteSevice.emitCompte();
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
    for(this.i=0;this.i<this.prestataireList.length;this.i++){
      if(this.prestataireList[this.i].id_user===this.utilisateur1.id_user){
        this.compt1=this.prestataireList[this.i].id_prest;
      }
    }
    for(this.i=0;this.i<this.consultationList.length;this.i++){
      if(this.consultationList[this.i].id_user===this.malade.id_user && this.consultationList[this.i].etat==0){
        this.consultationList[this.i].etat=1;
      }
    }
    const montant = this.form.get('montant').value;
    const compte = new Compte(this.compteListe.length + 1,montant,this.compt1,0);
    this.compteSevice.addCompte(compte);



    let loader1 = this.loadingCtrl.create({
      content: 'Sauvegarde en cours…'
    });
    loader1.present();
    this.compteSevice.saveData().then(
      () => {
        this.consultationService.saveData().then(
          () => {
           
          },
          (error) => {
           
          }
        );
        


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
  ngOnDestroy() {
    this.compteSubscription.unsubscribe();
    this.utilisateurSubscription.unsubscribe();
    this.prestataireSubscription.unsubscribe();
    this.medicament_consultationSubscription.unsubscribe();
    this.consultationSubscription.unsubscribe();
    this.beneficiaireSubscription.unsubscribe();
    this.remboursementSubscription.unsubscribe();
  }

  onToggleMenu(){
    this.menuCtrl.open() ;
  }

}
