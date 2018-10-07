import { Component, OnInit } from '@angular/core';
import { MenuController, NavParams,NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {TabsPage} from '../tabs/tabs';

@Component({
  selector: 'page-auth',
  templateUrl: './auth.html'
})
export class AuthPage implements OnInit {

  mode: string;
  authForm: FormGroup;
  errorMessage: string;

  constructor(private navParams: NavParams,
              private menuCtrl: MenuController,
              private navCtrl:NavController,
              private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.mode = this.navParams.get('mode');
    this.initForm();
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
    if (this.mode === 'new') {
       console.log('dougueuleul say khamékay');
    } else if (this.mode === 'connect') {
        console.log('dougueuleul say khamékay');
    }
  }
}