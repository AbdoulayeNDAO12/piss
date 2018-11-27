import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Utilisateur } from '../../../models/Utilisateur.models';
import { Donneur } from '../../../models/Donneur.models';
import { Compte } from '../../../models/Compte.models';
import { Subscription } from 'rxjs/Subscription';
import { MenuController, NavController, LoadingController, ToastController} from 'ionic-angular';
import { UserService } from '../../../Service/utilisateur.service';
import { CompteService } from '../../../Service/compte.service';
import { DonneurService } from '../../../Service/Donneur.service';
import { Versement } from '../../../models/Versement.models';
import { Donneur_Zakat } from '../../../models/Doneur_Zakat.models';
import { Donneur_ZakatService } from '../../../Service/donneur_zakat.service';
import { VersementService } from '../../../Service/versement.service';
import { AccueilPage } from '../../pageAccueil/accueil/accueil';

@Component({
  selector: 'page-zakat-form',
  templateUrl: 'zakat-form.html',
})
export class ZakatFormPage implements OnInit{

  
  zakatForm: FormGroup;
  errorMessage: string;
  utilisateur: Utilisateur;
  versement: Versement;
  donneur: Donneur;
  compte: Compte;
  utilisateurSubscription: Subscription;
  utilisateurList: Utilisateur[];
  compteList: Compte[];
  donneurList: Donneur[];
  versementSubscription: Subscription;
  versementList: Versement[]=[];
  compteSubscription: Subscription;
  donneur_zakatSubscription: Subscription;
  donneur_zakat:Donneur_Zakat;
  donneur_zakatList:Donneur_Zakat[];
  donneurSubscription:Subscription;

  constructor(private menuCtrl: MenuController,
    private navCtrl: NavController, private loadingCtrl: LoadingController, private toastCtrl: ToastController,
    private formBuilder: FormBuilder, private utilisateurService: UserService, private compteService: CompteService,
    private donneurService: DonneurService,
    private donneur_ZakatService:Donneur_ZakatService,private versementService:VersementService) { }
  initForm() {
    this.zakatForm = this.formBuilder.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      adresse: ['', Validators.required],
      profession: ['', Validators.required],
      telephone: ['', Validators.required],
      sexe: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      sum: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.initForm();
    {
      this.initForm();
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

      this.donneur_ZakatService.retrieveData().then(
        () => {
          this.donneur_zakatSubscription = this.donneur_ZakatService.donneur_Zakat$.subscribe(
            (donneur_zakat: Donneur_Zakat[]) => {
              this.donneur_zakatList = donneur_zakat.slice();
            }
          );
          this.donneur_ZakatService.emitDonneur_Zakat();
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
      this.versementService.retrieveData().then(
        () => {
          this.versementSubscription = this.versementService.versement$.subscribe(
            (versement: Versement[]) => {
              this.versementList = versement.slice();
            }
          );
          this.versementService.emitVersement;
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
    const prenom = this.zakatForm.get('prenom').value;
    const nom = this.zakatForm.get('nom').value;
    const adresse = this.zakatForm.get('adresse').value;
    const telephone = this.zakatForm.get('telephone').value;
    const email = this.zakatForm.get('email').value;
    const montant = this.zakatForm.get('sum').value;

    this.utilisateur = new Utilisateur(this.utilisateurList.length+1, prenom, nom, adresse, "", telephone, "", null, email, "", "donneur zakat");
    this.utilisateurService.addUser(this.utilisateur);
    this.donneur = new Donneur(this.donneurList.length+1, this.utilisateur.id_user);
    this.donneurService.addDonneur(this.donneur);
    this.compte = new Compte(this.compteList.length+1, 0);
    this.compteService.addCompte(this.compte);
    this.versement = new Versement(this.versementList.length+1, montant,new Date,this.donneur.id_donneur);
    this.versementService.addVersement(this.versement);
    this.donneur_zakat = new Donneur_Zakat(this.donneur_zakatList.length+1, this.donneur.id_donneur);
    this.donneur_ZakatService.addDonneur_Zakat(this.donneur_zakat);
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
        this.versementService.saveData().then(
          () => {
           
          },
          (error) => {
           
          }
        );
        this.donneur_ZakatService.saveData().then(
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

}




