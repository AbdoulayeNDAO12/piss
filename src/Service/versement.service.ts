import {Subject} from 'rxjs/Subject';
import * as firebase from 'firebase';
import DataSnapshot= firebase.database.DataSnapshot; 
import { Versement } from '../models/Versement.models';

export class VersementService {
versement$= new Subject<Versement[]>();
  versementList: Versement[]=[ ] ;
    addVersement(versement: Versement) {
    this.versementList.push(versement);
    this.emitVersement();
  }
  emitVersement(){
  this.versement$.next(this.versementList.slice());
  }
    saveData() {
    return new Promise((resolve, reject) => {
      firebase.database().ref('Versement').set(this.versementList).then(
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
      firebase.database().ref('Versement').once('value').then(
        (data: DataSnapshot) => {
          this.versementList = data.val();
          this.emitVersement();
          resolve('Versementnées récupérées avec succès !');
        }, (error) => {
          reject(error);
        }
      );
    });
  }
}