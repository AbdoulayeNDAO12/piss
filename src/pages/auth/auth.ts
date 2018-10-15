import { Component, OnInit } from '@angular/core';
import { MenuController, NavParams,NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {TabsPage} from '../tabs/tabs';
import { AuthService } from '../../Service/auth.sevice';
import { InscriptionPage } from '../inscription/inscription';

@Component({
  selector: 'page-auth',
  templateUrl: './auth.html'
})
export class AuthPage implements OnInit {

  authForm: FormGroup;
  errorMessage: string;
  authen:any[];
 

  constructor(private menuCtrl: MenuController,
              private navCtrl:NavController,
              private formBuilder: FormBuilder,
              private auth:AuthService) {}

  ngOnInit() {
    this.initForm();
    this.authen=this.auth.listLogin;
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
       if(email===this.authen[0] && password===this.authen[1]){
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