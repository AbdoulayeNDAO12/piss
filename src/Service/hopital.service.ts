import { Subject } from 'rxjs/Subject';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;
import { Hopital } from '../models/Hopital.models';

export class HopitalService {
    hopital$ = new Subject<Hopital[]>();
    hopitalList: Hopital[] = [
        {
            id_hopital:1,
            id_prest: 1,
            
        }
    ];
    addPrestataire(hopital: Hopital) {
        this.hopitalList.push(hopital);
        this.emitHopital();
    }
    emitHopital() {
        this.hopital$.next(this.hopitalList.slice());
    }
    saveData() {
        return new Promise((resolve, reject) => {
            firebase.database().ref('Hopital').set(this.hopitalList).then(
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
            firebase.database().ref('Hopital').once('value').then(
                (data: DataSnapshot) => {
                    this.hopitalList = data.val();
                    this.emitHopital();
                    resolve('Données récupérées avec succès !');
                }, (error) => {
                    reject(error);
                }
            );
        });
    }
}