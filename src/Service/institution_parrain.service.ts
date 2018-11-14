import {Subject} from 'rxjs/Subject';
import * as firebase from 'firebase';
import DataSnapshot= firebase.database.DataSnapshot; 
import { InstitutionParrain } from '../models/Institution_Parrain.models';

export class InstitutionParrainService {
institutionParrain$= new Subject<InstitutionParrain[]>();
institutionParrainList: InstitutionParrain[]=[
  {
    id_institution:0,
    id_parrain:0
  }
] ;
    addInstitutionParrain(institutionParrain: InstitutionParrain) {
    this.institutionParrainList.push(institutionParrain);
    this.emitInstitutionParrain();
  }
  emitInstitutionParrain(){
  this.institutionParrain$.next(this.institutionParrainList.slice());
  }
    saveData() {
    return new Promise((resolve, reject) => {
      firebase.database().ref('InstitutionParrain').set(this.institutionParrainList).then(
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
      firebase.database().ref('InstitutionParrain').once('value').then(
        (data: DataSnapshot) => {
          this.institutionParrainList = data.val();
          this.emitInstitutionParrain();
          resolve('Données récupérées avec succès !');
        }, (error) => {
          reject(error);
        }
      );
    });
  }
}