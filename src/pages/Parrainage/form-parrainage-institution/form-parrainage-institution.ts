import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../Service/auth.sevice';
import { UserService } from '../../../Service/utilisateur.service';
import { CompteService } from '../../../Service/compte.service';
import { ParrainService } from '../../../Service/parrain.service';
import { DonneurService } from '../../../Service/Donneur.service';
import { Utilisateur } from '../../../models/Utilisateur.models';
import { Donneur } from '../../../models/Donneur.models';
import { Compte } from '../../../models/Compte.models';
import { Parrain } from '../../../models/Parrain.models';
import { InstitutionParrain } from '../../../models/Institution_Parrain.models';
import { InstitutionParrainService } from '../../../Service/institution_parrain.service';
import { Institution } from '../../../models/Institution.models';
import { ParrainageInstitutionPage } from '../parrainageInstitution/parrainageInstitution';
import { InstitutionService } from '../../../Service/institution.service';
import { Subscription } from 'rxjs/Subscription';
import { constructor, auth } from 'firebase';

/**
 * Generated class for the FormParrainageInstitutionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-form-parrainage-institution',
  templateUrl: 'form-parrainage-institution.html',
})
export class FormParrainageInstitutionPage implements OnInit,OnDestroy {

  authForm: FormGroup;
  errorMessage: string;
  utilisateur: Utilisateur;
  parrain: Parrain;
  donneur: Donneur;
  institution: Institution;
  compte: Compte;
  utilisateurSubscription: Subscription;
  utilisateurList: Utilisateur[];
  compteList: Compte[];
  donneurList: Donneur[];
  parrainSubscription: Subscription;
  parrainList: Parrain[];
  instiutionList: Institution[];
  compteSubscription: Subscription;
  filleulSubscription: Subscription;
  institutionparrainList: InstitutionParrain[];
  institutionparrainSubscription: Subscription;
  institution_parrain:InstitutionParrain;
  donneurSubscription:Subscription;

  constructor(private menuCtrl: MenuController,
    private navCtrl: NavController, private loadingCtrl: LoadingController, private toastCtrl: ToastController,
    private formBuilder: FormBuilder, private navParams: NavParams,
    private auth: AuthService, private utilisateurService: UserService, private compteService: CompteService,
    private parrainService: ParrainService, private donneurService: DonneurService,
    private institution_parrainService: InstitutionParrainService, private institutionService: InstitutionService) { }
  initForm() {
    this.authForm = this.formBuilder.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      adresse: ['', Validators.required],
      profession: ['', Validators.required],
      telephone: ['', Validators.required],
      sexe: ['', Validators.required],
      dateNaiss: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      password2: ['', Validators.required],
      checkbox: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.initForm();
    this.institution = this.navParams.get('institution');
    {
      this.initForm();
      this.institution = this.navParams.get('institution');
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

      this.parrainService.retrieveData().then(
        () => {
          this.parrainSubscription = this.parrainService.parrain$.subscribe(
            (parrain: Parrain[]) => {
              this.parrainList = parrain.slice();
            }
          );
          this.parrainService.emitParrain();
        },
        (error) => {

        }
      );

      this.compteService.retrieveData().then(
        () => {
          this.compteSubscription = this.compteService.compte$.subscribe(
            (compte: Compte[]) => {
              this.compteList = compte.slice();
            }
          );
          this.compteService.emitCompte();
        },
        (error) => {

        }
      );
      this.institution_parrainService.retrieveData().then(
        () => {
          this.institutionparrainSubscription = this.institution_parrainService.institutionParrain$.subscribe(
            (institution_parrain: InstitutionParrain[]) => {
              this.institutionparrainList = institution_parrain.slice();
            }
          );
          this.institution_parrainService.emitInstitutionParrain;
        },
        (error) => {

        }
      );
      this.donneurService.retrieveData().then(
        () => {
          this.donneurSubscription = this.donneurService.donneur$.subscribe(
            (donneur: Donneur[]) => {
              this.donneurList = donneur.slice();
            }
          );
          this.donneurService.emitDonneur();
        },
        (error) => {
          
        }
      );



    }
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }


  onSubmitForm() {
    const prenom = this.authForm.get('prenom').value;
    const nom = this.authForm.get('nom').value;
    const adresse = this.authForm.get('adresse').value;
    const profession = this.authForm.get('profession').value;
    const telephone = this.authForm.get('telephone').value;
    const sexe = this.authForm.get('sexe').value;
    const dateNais = this.authForm.get('dateNaiss').value;
    const email = this.authForm.get('email').value;
    const password = this.authForm.get('password').value;
    const checkbox = this.authForm.get('checkbox').value;

    this.utilisateur = new Utilisateur(this.utilisateurList.length + 1, prenom, nom, adresse, profession, telephone, sexe, dateNais, email, password, "parrain");
    this.utilisateurService.signUpUser(email, password);
    this.utilisateurService.addUser(this.utilisateur);
    this.donneur = new Donneur(this.donneurList.length + 1, this.utilisateur.id_user);
    this.donneurService.addDonneur(this.donneur);
    this.compte = new Compte(this.compteList.length + 1, 0);
    this.compteService.addCompte(this.compte);
    this.parrain = new Parrain(this.parrainList.length + 1, this.donneur.id_donneur, this.compte.id_compte);
    this.parrainService.addParrain(this.parrain);
    this.institution_parrain = new InstitutionParrain(this.institution.id_institution, this.parrain.id_parrain);
    this.institution_parrainService.addInstitutionParrain(this.institution_parrain);
    let loader1 = this.loadingCtrl.create({
      content: 'Sauvegarde en cours…'
    });
    loader1.present();
    this.utilisateurService.saveData().then(
      () => {
        this.donneurService.saveData().then(
          () => {
           
          },
          (error) => {
           
          }
        );
        this.compteService.saveData().then(
          () => {
           
          },
          (error) => {
           
          }
        );
        this.parrainService.saveData().then(
          () => {
           
          },
          (error) => {
           
          }
        );
        this.institution_parrainService.saveData().then(
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
  
    
  this.navCtrl.push(ParrainageInstitutionPage);
}
ngOnDestroy() {
  this.filleulSubscription.unsubscribe();
  this.utilisateurSubscription.unsubscribe();
  this.parrainSubscription.unsubscribe();
  this.donneurSubscription.unsubscribe();
  this.donneurSubscription.unsubscribe();
  this.compteSubscription.unsubscribe();
  this.institutionparrainSubscription.unsubscribe();
}

}



