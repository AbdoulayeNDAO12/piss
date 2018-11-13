import {Subject} from 'rxjs/Subject';
import * as firebase from 'firebase';
import DataSnapshot= firebase.database.DataSnapshot; 
import { Filleul } from '../models/Filleul.model';

export class FilleulService {
filleul$= new Subject<Filleul[]>();
filleulList: Filleul[]=[] ;
    addFilleul(filleul: Filleul) {
    this.filleulList.push(filleul);
    this.emitFilleul();
  }
  emitFilleul(){
  this.filleul$.next(this.filleulList.slice());
  }
    saveData() {
    return new Promise((resolve, reject) => {
      firebase.database().ref('Filleul').set(this.filleulList).then(
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
      firebase.database().ref('Filleul').once('value').then(
        (data: DataSnapshot) => {
          this.filleulList = data.val();
          this.emitFilleul();
          resolve('Données récupérées avec succès !');
        }, (error) => {
          reject(error);
        }
      );
    });
  }
}