import {Subject} from 'rxjs/Subject';
import * as firebase from 'firebase';
import DataSnapshot= firebase.database.DataSnapshot; 
import { Donneur } from '../models/Donneur.models';

export class DonneurService {
donneur$= new Subject<Donneur[]>();
  donneurList: Donneur[]=[] ;
    addDonneur(donneur: Donneur) {
    this.donneurList.push(donneur);
    this.emitDonneur();
  }
  emitDonneur(){
  this.donneur$.next(this.donneurList.slice());
  }
    saveData() {
    return new Promise((resolve, reject) => {
      firebase.database().ref('Donneur').set(this.donneurList).then(
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
      firebase.database().ref('Donneur').once('value').then(
        (data: DataSnapshot) => {
          this.donneurList = data.val();
          this.emitDonneur();
          resolve('Donneurnées récupérées avec succès !');
        }, (error) => {
          reject(error);
        }
      );
    });
  }
}