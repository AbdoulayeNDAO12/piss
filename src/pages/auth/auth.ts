import { Component, OnInit } from '@angular/core';
import { MenuController, NavParams,NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {TabsPage} from '../tabs/tabs';
import { AuthService } from '../../Service/auth.sevice';
import { InscriptionPage } from '../inscription/inscription';
import { ZakatPage } from '../zakat/zakat';
import {UserService} from '../../Service/utilisateur.service';
import { Utilisateur } from '../../models/Utilisateur.models';

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
              private user:UserService) {}

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
    for (this.person in this.list )
       if(email===this.person.email){
        this.navCtrl.push(TabsPage);
       }else{
         this.errorMessage='Identifiants incorrects';
        this.navCtrl.push(AuthPage);
       }
    }
    onClick(){
      this.navCtrl.push(InscriptionPage);
    }
}