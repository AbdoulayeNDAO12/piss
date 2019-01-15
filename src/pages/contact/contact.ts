import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public menuCtrl:MenuController) {

  }

  onToggleMenu(){
    this.menuCtrl.open() ;
  }

}
