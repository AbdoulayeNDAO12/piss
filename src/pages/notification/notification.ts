import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Consultation } from '../../models/Consultation.models';

/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage implements OnInit{
  consultation: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl:MenuController) {
  }
  ngOnInit() {
    this.consultation = this.navParams.get('consultations'); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationPage');
  }

  onToggleMenu(){
    this.menuCtrl.open() ;
  }

}
