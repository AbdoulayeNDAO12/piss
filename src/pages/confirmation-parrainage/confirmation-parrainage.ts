import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Institution } from '../../models/Institution.models';
import { Filleul } from '../../models/Filleul.model';
import { MenuController } from 'ionic-angular/components/app/menu-controller';

/**
 * Generated class for the ConfirmationParrainagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirmation-parrainage',
  templateUrl: 'confirmation-parrainage.html',
})
export class ConfirmationParrainagePage {
  institution:Institution;
  filleul:Filleul;
  don: number;
  dons: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  }
  ngOnInit(){
    this.institution = this.navParams.get('institution');
    this.filleul = this.navParams.get('filleul');
    this.don = this.navParams.get('don');
    this.dons = this.navParams.get('dons');
  }

  onToggleMenu(){
    this.menuCtrl.open() ;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmationParrainagePage');
  }

}
