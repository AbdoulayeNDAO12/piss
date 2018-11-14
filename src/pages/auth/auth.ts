import { Component, OnInit } from '@angular/core';
import { MenuController, NavParams,NavController, ToastController, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {TabsPage} from '../tabs/tabs';
import { AuthService } from '../../Service/auth.sevice';
import { InscriptionPage } from '../inscription/inscription';
import { ZakatPage } from '../zakat/zakat';
import {UserService} from '../../Service/utilisateur.service';
import { Utilisateur } from '../../models/Utilisateur.models';
import { InstitutionParrainService } from '../../Service/institution_parrain.service';

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
 

  constructor(private menuCtrl: MenuController,
              private navCtrl:NavController,
              private formBuilder: FormBuilder,
              private user:UserService,private institution_parrainService: InstitutionParrainService,
              private loadingCtrl:LoadingController,
              private toastCtrl:ToastController) {}

  ngOnInit() {
    this.initForm();
    this.list=this.user.utilisateurList;
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
    this.user.signInUser(email,password).then(
      () => {
        this.navCtrl.push(TabsPage);
      },
      (error) => {
        this.errorMessage = error;
      }
    );
    }
    onClick(){
      this.navCtrl.push(InscriptionPage);
    }
    enregistre(){
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
    }
}