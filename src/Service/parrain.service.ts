import { Subject } from 'rxjs/Subject';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;
import { Parrain } from '../models/Parrain.models';

export class ParrainService {
  parrain$ = new Subject<Parrain[]>();
  parrainList: Parrain[] = [
    {
      id_parrain: 0,
      id_donneur: 0,
      id_compte: 0,
    }
  ];
  addParrain(parrain: Parrain) {
    this.parrainList.push(parrain);
    this.emitParrain();
  }
  emitParrain() {
    this.parrain$.next(this.parrainList.slice());
  }
  saveData() {
    return new Promise((resolve, reject) => {
      firebase.database().ref('Parrain').set(this.parrainList).then(
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
      firebase.database().ref('Parrain').once('value').then(
        (data: DataSnapshot) => {
          this.parrainList = data.val();
          this.emitParrain();
          resolve('Données récupérées avec succès !');
        }, (error) => {
          reject(error);
        }
      );
    });
  }
}