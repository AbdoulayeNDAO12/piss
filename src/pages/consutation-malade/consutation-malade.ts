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
import { NotificationPage } from '../notification/notification';
import { AccueilPage } from '../pageAccueil/accueil/accueil';
import { Utilisateur } from '../../models/Utilisateur.models';
import { Compte } from '../../models/Compte.models';

@IonicPage()
@Component({
  selector: 'page-consutation-malade',
  templateUrl: 'consutation-malade.html',
})
export class ConsutationMaladePage {

  i : number;
  /**
   * @name form
   * @type {FormGroup}
   * @public
   * @description     Defines a FormGroup object for managing the template form
   */
  public form: FormGroup;
  consultationList: Consultation[];
  consultationSubscription: Subscription;
  hopitalSubscription:Subscription;
  hopitalList: Hopital[];
  pharmacieSubscription: Subscription;
  pharmacieList: Pharmacie[];
  beneficiaireSubscription: Subscription;
  beneficiaireList: Beneficiaire[];
  compteList:Compte[];
  compte:Compte;
  prestataireSubscription: Subscription;
  prestataireList: Prestataire[];
  remboursementSubscription: Subscription;
  remboursementList: Remboursement[];
  medicament_consultationSubscription: Subscription;
  medicament_consultationList: Medicament_Consultation[];
  utilisateur: Utilisateur;
  utilisateur1: Utilisateur;
  malade: Utilisateur;
  utilisateurSubscription: Subscription;
  compteSubscription: Subscription;
  utilisateurList: Utilisateur[];
  compt: number;
  compt1: number;
  indice: number;
  medicaments: string[]=[];


  constructor(public navCtrl: NavController,
    public navParams: NavParams,public menuCtrl:MenuController,
    private _FB: FormBuilder,private consultationService:ConsultationService,private hopitalService:HopitalService,
    private pharmacieService:PharmacieService,private toastCtrl:ToastController ,private beneficiaireService:BeneficiaireService,
    private compteSevice:CompteService,private medicamentService:MedicamentService,private prestataireService:PrestataireService,
    private remboursementService:RemboursementService,private loadingCtrl:LoadingController,private utilisateurService:UserService,private medicament_consultationService:Medicament_ConsultationService) {

    // Define the FormGroup object for the form
    // (with sub-FormGroup objects for handling
    // the dynamically generated form input fields)
    this.form = this._FB.group({
      name: ['', Validators.required],
      description:['',Validators.required],
      technologies: this._FB.array([
        this.initTechnologyFields()
      ]),
      montant:['',Validators.required],
    });
  }
  ngOnInit() {
    this.utilisateur1 = this.navParams.get('utilisateur'); 
    this.malade = this.navParams.get('malade'); 
   this.initTechnologyFields();
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
        this.medicament_consultationService.emitMedicament_Consultation;
      },
      (error) => {
        
      }
    );
    this.compteSevice.retrieveData().then(
      () => {
        this.compteSubscription = this.compteSevice.compte$.subscribe(
          (compte: Compte[]) => {
            this.compteList = compte.slice();
          }
        );
        this.compteSevice.emitCompte();
      },
      (error) => {
        
      }
    );
   
  }
  onSubmitForm() {
    for(this.i=0;this.i<this.beneficiaireList.length;this.i++){
      if(this.beneficiaireList[this.i].id_user===this.malade.id_user){
        this.compt=this.beneficiaireList[this.i].id_benef;
      }
    }
    for(this.i=0;this.i<this.prestataireList.length;this.i++){
      if(this.prestataireList[this.i].id_user===this.utilisateur1.id_user){
        this.compt1=this.prestataireList[this.i].id_prest;
        this.indice=this.i;
      }
    }
   
    const technologies = this.form.get('technologies').value;
    const montant = this.form.get('montant').value;
    const date:Date=new Date();
    for(this.i=0;this.i<technologies.length; this.i++){
      this.medicaments.push(technologies[this.i]);
    }
  
    const consultations=new Consultation(this.consultationList.length+1,montant,new Date(),this.compt1,this.compt,0,this.malade.id_user,this.medicaments);
    this.consultationService.addUser(consultations);
    const compte = new Compte(this.compteList.length+1,montant,this.compt1,0);
    this.compteSevice.addCompte(compte);
    
   
    
    let loader1 = this.loadingCtrl.create({
      content: 'Sauvegarde en cours…'
    });
    loader1.present();
    this.consultationService.saveData().then(
      () => {
        this.medicament_consultationService.saveData().then(
          () => {
           
          },
          (error) => {
           
          }
        );
        this.compteSevice.saveData().then(
          () => {
           
          },
          (error) => {
           
          }
        );
        this.prestataireService.saveData().then(
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



  /**
   * Generates a FormGroup object with input field validation rules for
   * the technologies form object
   *
   * @publicF
   * @method initTechnologyFields
   * @return {FormGroup}
   */
  initTechnologyFields(): FormGroup {
    return this._FB.group({
      name: ['', Validators.required]
    });
  }



  /**
   * Programmatically generates a new technology input field
   *
   * @public
   * @method addNewInputField
   * @return {none}
   */
  addNewInputField(): void {
    const control = <FormArray>this.form.controls.technologies;
    control.push(this.initTechnologyFields());
  }



  /**
   * Programmatically removes a recently generated technology input field
   *
   * @public
   * @method removeInputField
   * @param i    {number}      The position of the object in the array that needs to removed
   * @return {none}
   */
  removeInputField(i: number): void {
    const control = <FormArray>this.form.controls.technologies;
    control.removeAt(i);
  }



  /**
   * Receive the submitted form data
   *
   * @public
   * @method manage
   * @param val    {object}      The posted form data
   * @return {none}
   */
  manage(val: any): void {
    console.dir(val);
  }
  ngOnDestroy() {
    this.hopitalSubscription.unsubscribe();
    this.prestataireSubscription.unsubscribe();
    this.pharmacieSubscription.unsubscribe();
    this.beneficiaireSubscription.unsubscribe();
    this.remboursementSubscription.unsubscribe();
    this.medicament_consultationSubscription.unsubscribe();
    this.compteSubscription.unsubscribe();
  }


  onToggleMenu(){
    this.menuCtrl.open() ;
  }

}