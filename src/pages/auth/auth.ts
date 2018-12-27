import { Component, OnInit } from '@angular/core';
import { MenuController, NavParams,NavController, ToastController, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {TabsPage} from '../tabs/tabs';
import { InscriptionPage } from '../inscription/inscription';
import { ZakatPage } from '../zakat/zakat';
import {UserService} from '../../Service/utilisateur.service';
import { Utilisateur } from '../../models/Utilisateur.models';
import { FilleulService } from '../../Service/filleul.service';
import { ConsultationService } from '../../Service/consultation.service';
import { Medicament_ConsultationService } from '../../Service/medicament_consultation.service';
import * as firebase from 'firebase';
import { Subscription } from 'rxjs';
import { HomePage } from '../home/home';
import { AccueilSectionAssurancePage } from '../pageAccueil/accueil-section-assurance/accueil-section-assurance';


@Component({
  selector: 'page-auth',
  templateUrl: './auth.html'
})
export class AuthPage implements OnInit {

  authForm: FormGroup;
  errorMessage: string;
  authen:any[];
  zakatPage = ZakatPage;
  person:any=Utilisateur;
  list: any[];
  email:String ;
  utilisateurSubscription: Subscription;
  utilisateurList: Utilisateur[];
  utilisateur: Utilisateur;
  i:number;
  compt: number;
 
  
 

  constructor(private menuCtrl: MenuController,
              private navCtrl:NavController,
              private formBuilder: FormBuilder,
              private utilisateurService: UserService,private filleul: FilleulService,
              private loadingCtrl:LoadingController,
              private toastCtrl:ToastController) {
              
              }

  ngOnInit() {
   
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
      
    
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }

  initForm() {
    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  
  
    onSubmitForm() {
    const email = this.authForm.get('email').value;
    const password = this.authForm.get('password').value;
    for(this.i=0;this.i<this.utilisateurList.length;this.i++){
      if(this.utilisateurList[this.i].email===email){
        this.compt=this.i;
      }
    }
    this.utilisateur=this.utilisateurList[this.compt];
    this.utilisateurService.signInUser(email,password).then(
      () => {
        
        this.navCtrl.push(AccueilSectionAssurancePage,{utilisateur:this.utilisateur});
      },
      (error) => {
        this.errorMessage = error;
      }
    );
    }
    onClick(){
      this.navCtrl.push(InscriptionPage);
    }
   /*enregistre(){
      let loader = this.loadingCtrl.create({
        content: 'Sauvegarde en cours'
      });
      loader.present();
      this.user.saveData().then(
        () => {
          loader.dismiss();
          this.toastCtrl.create({
            message: 'Données sauvegardées !',
            duration: 3000,
            position: 'bottom'
          }).present();
        },
        (error) => {
          loader.dismiss();
          this.toastCtrl.create({
            message: error,
            duration: 3000,
            position: 'bottom'
          }).present();
        }
        
      );
   }*/
}