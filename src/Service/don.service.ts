import {Subject} from 'rxjs/Subject';
import * as firebase from 'firebase';
import DataSnapshot= firebase.database.DataSnapshot; 
import { Don } from '../models/Don.models';

export class DonService {
don$= new Subject<Don[]>();
  donList: Don[]=[ ] ;
    addDon(don: Don) {
    this.donList.push(don);
    this.emitDon();
  }
  emitDon(){
  this.don$.next(this.donList.slice());
  }
    saveData() {
    return new Promise((resolve, reject) => {
      firebase.database().ref('Don').set(this.donList).then(
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
      firebase.database().ref('Don').once('value').then(
        (data: DataSnapshot) => {
          this.donList = data.val();
          this.emitDon();
          resolve('Données récupérées avec succès !');
        }, (error) => {
          reject(error);
        }
      );
    });
  }
}