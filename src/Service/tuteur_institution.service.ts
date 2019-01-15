import {Subject} from 'rxjs/Subject';
import * as firebase from 'firebase';
import DataSnapshot= firebase.database.DataSnapshot; 
import { Tuteur_Institution } from '../models/Tuteur_Institution.models';

export class Tuteur_InstitutionService {
tuteur_Institution$= new Subject<Tuteur_Institution[]>();
  tuteur_InstitutionList: Tuteur_Institution[]=[] ;
    addTuteur_Institution(tuteur_Institution: Tuteur_Institution) {
    this.tuteur_InstitutionList.push(tuteur_Institution);
    this.emitTuteur_Institution();
  }
  emitTuteur_Institution(){
  this.tuteur_Institution$.next(this.tuteur_InstitutionList.slice());
  }
    saveData() {
    return new Promise((resolve, reject) => {
      firebase.database().ref('Tuteur_Institution').set(this.tuteur_InstitutionList).then(
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
      firebase.database().ref('Tuteur_Institution').once('value').then(
        (data: DataSnapshot) => {
          this.tuteur_InstitutionList = data.val();
          this.emitTuteur_Institution();
          resolve('Données récupérées avec succès !');
        }, (error) => {
          reject(error);
        }
      );
    });
  }
}