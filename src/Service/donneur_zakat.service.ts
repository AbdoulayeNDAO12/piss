import {Subject} from 'rxjs/Subject';
import * as firebase from 'firebase';
import DataSnapshot= firebase.database.DataSnapshot; 
import { Donneur_Zakat } from '../models/Doneur_Zakat.models';

export class Donneur_ZakatService {
donneur_Zakat$= new Subject<Donneur_Zakat[]>();
  donneur_ZakatList: Donneur_Zakat[]=[ ] ;
    addUser(donneur_Zakat: Donneur_Zakat) {
    this.donneur_ZakatList.push(donneur_Zakat);
    this.emitDonneur_Zakat();
  }
  emitDonneur_Zakat(){
  this.donneur_Zakat$.next(this.donneur_ZakatList.slice());
  }
    saveData() {
    return new Promise((resolve, reject) => {
      firebase.database().ref('Donneur_Zakat').set(this.donneur_ZakatList).then(
        (data: DataSnapshot) => {
          resolve(data);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  retrieveData() {
    return new Promise((resolve, reject) => {
      firebase.database().ref('Donneur_Zakat').once('value').then(
        (data: DataSnapshot) => {
          this.donneur_ZakatList = data.val();
          this.emitDonneur_Zakat();
          resolve('Données récupérées avec succès !');
        }, (error) => {
          reject(error);
        }
      );
    });
  }
}