import { Subject } from 'rxjs/Subject';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;
import { Pharmacie } from '../models/Pharmacie.models';

export class PharmacieService {
    Pharmacie$ = new Subject<Pharmacie[]>();
    pharmacieList: Pharmacie[] = [
        {
            id_pharm:1,
            id_prest: 2,
            
        }
    ];
    addPharmacie(Pharmacie: Pharmacie) {
        this.pharmacieList.push(Pharmacie);
        this.emitPharmacie();
    }
    emitPharmacie() {
        this.Pharmacie$.next(this.pharmacieList.slice());
    }
    saveData() {
        return new Promise((resolve, reject) => {
            firebase.database().ref('Pharmacie').set(this.pharmacieList).then(
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
            firebase.database().ref('Pharmacie').once('value').then(
                (data: DataSnapshot) => {
                    this.pharmacieList = data.val();
                    this.emitPharmacie();
                    resolve('Données récupérées avec succès !');
                }, (error) => {
                    reject(error);
                }
            );
        });
    }
}