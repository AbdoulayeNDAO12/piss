import { Subject } from 'rxjs/Subject';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;
import { Prestataire } from '../models/Prestataire.models';

export class PrestataireService {
    prestataire$ = new Subject<Prestataire[]>();
    prestataireList: Prestataire[] = [
        {
            id_prest: 1,
            nom: 'Hopital Universitaire de Fann',
            id_user: 6,
            type: 'Hopital'
        },
        {
            id_prest: 2,
            nom: 'Phamacie Khadimou Rassoul',
            id_user: 7,
            type: 'Pharmacie'
        }
    ];
    addPrestataire(prestataire: Prestataire) {
        this.prestataireList.push(prestataire);
        this.emitPrestataire();
    }
    emitPrestataire() {
        this.prestataire$.next(this.prestataireList.slice());
    }
    saveData() {
        return new Promise((resolve, reject) => {
            firebase.database().ref('Prestataire').set(this.prestataireList).then(
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
            firebase.database().ref('Prestataire').once('value').then(
                (data: DataSnapshot) => {
                    this.prestataireList = data.val();
                    this.emitPrestataire();
                    resolve('Données récupérées avec succès !');
                }, (error) => {
                    reject(error);
                }
            );
        });
    }
}