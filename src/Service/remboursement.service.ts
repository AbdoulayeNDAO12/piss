import {Subject} from 'rxjs/Subject';
import * as firebase from 'firebase';
import DataSnapshot= firebase.database.DataSnapshot; 
import { Remboursement } from '../models/Remboursement.models';

export class RemboursementService {
remboursement$= new Subject<Remboursement[]>();
  remboursementList: Remboursement[]=[ ] ;
    addRemboursement(remboursement: Remboursement) {
    this.remboursementList.push(remboursement);
    this.emitRemboursement();
  }
  emitRemboursement(){
  this.remboursement$.next(this.remboursementList.slice());
  }
    saveData() {
    return new Promise((resolve, reject) => {
      firebase.database().ref('Remboursement').set(this.remboursementList).then(
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
      firebase.database().ref('Remboursement').once('value').then(
        (data: DataSnapshot) => {
          this.remboursementList = data.val();
          this.emitRemboursement();
          resolve('Remboursementnées récupérées avec succès !');
        }, (error) => {
          reject(error);
        }
      );
    });
  }
}