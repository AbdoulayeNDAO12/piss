import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Utilisateur } from '../../../models/Utilisateur.models';

/**
 * Generated class for the AccueilSectionAssurancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accueil-section-assurance',
  templateUrl: 'accueil-section-assurance.html',
})
export class AccueilSectionAssurancePage {

  utilisateur:Utilisateur;
  type:String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
 
  }
  ngOnInit(){
    this.utilisateur = this.navParams.get('utilisateur'); 
    if(this.utilisateur!=null){
      this.type=this.utilisateur.type_user;
    }else{
      this.type='rien';
    }
   
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccueilAssurancePage');
  }
  