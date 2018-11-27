import {Subject} from 'rxjs/Subject';
import * as firebase from 'firebase';
import DataSnapshot= firebase.database.DataSnapshot; 
import { Medicament } from '../models/Medicament.models';

export class MedicamentService {
medicament$= new Subject<Medicament[]>();
  medicamentList: Medicament[]=[ 
    {
      id_medicament:0,
      libelle:'',
      quantite:0,
      prix:0,
      id_pharmacie:0
    }
  ] ;
    addMedicament(medicament: Medicament) {
    this.medicamentList.push(medicament);
    this.emitMedicament();
  }
  emitMedicament(){
  this.medicament$.next(this.medicamentList.slice());
  }
    saveData() {
    return new Promise((resolve, reject) => {
      firebase.database().ref('Medicament').set(this.medicamentList).then(
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
      firebase.database().ref('Medicament').once('value').then(
        (data: DataSnapshot) => {
          this.medicamentList = data.val();
          this.emitMedicament();
          resolve('Medicamentnées récupérées avec succès !');
        }, (error) => {
          reject(error);
        }
      );
    });
  }
}