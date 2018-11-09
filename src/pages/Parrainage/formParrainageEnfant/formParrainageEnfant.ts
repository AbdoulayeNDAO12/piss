import {Component} from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MenuController, NavController } from 'ionic-angular';
import { AuthService } from '../../../Service/auth.sevice';
import { TabsPage } from '../../tabs/tabs';
import { AuthPage } from '../../auth/auth';


@Component({
    selector: 'page-formParrainageEnfant',
    templateUrl: 'formParrainageEnfant.html'
})
export class FormParrainageEnfantPage{
    authForm: FormGroup;
  errorMessage: string;

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
          password2: ['', Validators.required],
          checkbox:['',Validators.required]
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
    const adresse = this.authForm.get('adresse').value;
    const profession = this.authForm.get('profession').value;
    const telephone = this.authForm.get('telephone').value;
    const sexe = this.authForm.get('sexe').value;
    const dateNais = this.authForm.get('dateNaiss').value;
    const email = this.authForm.get('email').value;
    const password = this.authForm.get('password').value;
    const checkbox = this.authForm.get('checkbox').value;
    
    }
    
}

