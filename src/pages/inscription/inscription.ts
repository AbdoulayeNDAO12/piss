import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../../Service/auth.sevice';
import { TabsPage } from '../tabs/tabs';
import { AuthPage } from '../auth/auth';

/**
 * Generated class for the InscriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inscription',
  templateUrl: 'inscription.html',
})
export class InscriptionPage {
  authForm: FormGroup;
  errorMessage: string;
  authen:any[];

  constructor(private menuCtrl: MenuController,
    private navCtrl:NavController,
    private formBuilder: FormBuilder,
    private auth:AuthService) {}
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
}

onToggleMenu() {
this.menuCtrl.open();
}


onSubmitForm() {
const prenom = this.authForm.get('prenom').value;
const nom = this.authForm.get('nom').value;
const adresse = this.authForm.get('adress').value;
const profession = this.authForm.get('profession').value;
const telephone = this.authForm.get('telephone').value;
const sexe = this.authForm.get('sexe').value;
const dateNais = this.authForm.get('dateNaiss').value;
const email = this.authForm.get('email').value;
const password = this.authForm.get('password').value;
const confirm_password = this.authForm.get('password2').value;
if(email===this.authen[0] && password===this.authen[1]){
this.navCtrl.push(TabsPage);
}else{
this.errorMessage='Identifiants incorrects';
this.navCtrl.push(AuthPage);
}
}
}
