import {Component, OnInit, OnDestroy} from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MenuController, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { AuthService } from '../../../Service/auth.sevice';
import { Utilisateur } from '../../../models/Utilisateur.models';
import { Parrain } from '../../../models/Parrain.models';
import { Donneur } from '../../../models/Donneur.models';
import { Compte } from '../../../models/Compte.models';
import { UserService } from '../../../Service/utilisateur.service';
import { CompteService } from '../../../Service/compte.service';
import { ParrainService } from '../../../Service/parrain.service';
import { DonneurService } from '../../../Service/Donneur.service';
import { Filleul } from '../../../models/Filleul.model';
import { Subscription } from 'rxjs/Subscription';
import { FilleulService } from '../../../Service/filleul.service';
import { AccueilPage } from '../../pageAccueil/accueil/accueil';


@Component({
    selector: 'page-formParrainageEnfant',
    templateUrl: 'formParrainageEnfant.html'
})
export class FormParrainageEnfantPage implements OnInit,OnDestroy{
    authForm: FormGroup;
    valid: true;
    invalid: false;
  errorMessage: string;
  utilisateur:Utilisateur;
  parrain:Parrain;
  donneur:Donneur;
   compte: Compte;
   filleul:Filleul;
  utilisateurSubscription: Subscription;
  utilisateurList: Utilisateur[];
  compteList:Compte[];
  donneurList:Donneur[];
  parrainSubscription: Subscription;
  parrainList: Parrain[];
  filleulList: Filleul[];
  compteSubscription: Subscription;
  filleulSubscription: Subscription;
  donneurSubscription: Subscription;
  message: boolean = false;
  indx:number;
  i: number;


    constructor(private menuCtrl: MenuController,
        private navCtrl:NavController,private loadingCtrl:LoadingController,private toastCtrl:ToastController,
        private formBuilder: FormBuilder,private navParams:NavParams,
        private auth:AuthService,private utilisateurService:UserService,private compteService:CompteService,
        private parrainService:ParrainService,private donneurService:DonneurService,private filleulService:FilleulService) {}
        initForm() {
          this.authForm = this.formBuilder.group({
          prenom:['',  Validators.required],
          nom:['',  Validators.required],
          adresse:['',  Validators.required],
          profession:['', Validators.required],
          telephone:['',  Validators.required],
          sexe:['', Validators.required],
          dateNaiss:['',  Validators.required],
          email: ['', [Validators.required, Validators.email]],
          password: ['', Validators.required],
          password2: ['', Validators.required]          
          });
          }
    
    ngOnInit() {
    this.initForm();
    this.filleul = this.navParams.get('filleul');       
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
        this.filleulService.retrieveData().then(
          () => {
            this.filleulSubscription = this.filleulService.filleul$.subscribe(
              (filleul: Filleul[]) => {
                this.filleulList = filleul.slice();
              }
            );
            this.filleulService.emitFilleul();
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
    const password2 = this.authForm.get('password2').value;
    if(password===password2){
      this.utilisateur= new Utilisateur(this.utilisateurService.utilisateurList.length+1,prenom,nom,adresse,profession,telephone,sexe,dateNais,email,password,"parrain");
    this.utilisateurService.signUpUser(email,password);
    this.utilisateurService.addUser(this.utilisateur);
    this.donneur=new Donneur(this.donneurService.donneurList.length+1,this.utilisateur.id_user);
    this.donneurService.addDonneur(this.donneur);
    this.parrain=new Parrain(this.parrainService.parrainList.length+1,this.donneur.id_donneur,0);
    this.parrainService.addParrain(this.parrain);
      for(this.i=0;this.i<this.filleulList.length;this.i++){
        if(this.filleulList[this.i].id_filleul==this.filleul.id_filleul && this.filleulList[this.i].date_nais==this.filleul.date_nais){
          this.filleulList[this.i].id_parrain=this.parrain.id_parrain;
          this.filleulList[this.i].etat=1;
        }
        else{}
        
      }
      this.filleulService.emitFilleul();
      
  
    

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
          this.filleulService.saveData().then(
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
    else{
      this.message=true;
      
      
    }
    
    }
    ngOnDestroy() {
      this.filleulSubscription.unsubscribe();
      this.utilisateurSubscription.unsubscribe();
      this.parrainSubscription.unsubscribe();
      this.donneurSubscription.unsubscribe();
      this.donneurSubscription.unsubscribe();
      this.compteSubscription.unsubscribe();
    }
    
}

