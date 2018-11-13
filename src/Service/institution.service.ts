import {Subject} from 'rxjs/Subject';
import * as firebase from 'firebase';
import DataSnapshot= firebase.database.DataSnapshot; 
import { Institution } from '../models/Institution.models';

export class InstitutionService {
    institution$= new Subject<Institution[]>();
institutionList: Institution[]=[] ;
    addInstitution(institution: Institution) {
    this.institutionList.push(institution);
    this.emitInstitution();
  }
  emitInstitution(){
  this.institution$.next(this.institutionList.slice());
  }
    saveData() {
    return new Promise((resolve, reject) => {
      firebase.database().ref('Institution').set(this.institutionList).then(
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
      firebase.database().ref('Institution').once('value').then(
        (data: DataSnapshot) => {
          this.institutionList = data.val();
          this.emitInstitution();
          resolve('Données récupérées avec succès !');
        }, (error) => {
          reject(error);
        }
      );
    });
  }
}