import { Subject } from 'rxjs/Subject';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;
import { Tuteur } from '../models/Tuteur.models';

export class TuteurService {
    tuteur$ = new Subject<Tuteur[]>();
    tuteurList: Tuteur[] = [
        {
            id_tuteur: 1,
            id_user: 8,
            id_compte: 1
        },
        {
            id_tuteur: 2,
            id_user:9,
            id_compte: 2
        },
        {
            id_tuteur: 3,
            id_user: 10,
            id_compte: 3
        },
        {
            id_tuteur: 4,
            id_user: 11,
            id_compte: 4
        },
        {
            id_tuteur: 5,
            id_user: 12,
            id_compte: 5
        },
        {
            id_tuteur: 6,
            id_user: 13,
            id_compte: 6
        },
        {
            id_tuteur: 7,
            id_user: 14,
            id_compte: 7
        },
        {
            id_tuteur: 8,
            id_user: 15,
            id_compte: 8
        },
        {
            id_tuteur: 9,
            id_user: 16,
            id_compte: 9
        },
        {
            id_tuteur: 10,
            id_user: 17,
            id_compte: 10
        }



    ];
    addTuteur(tuteur: Tuteur) {
        this.tuteurList.push(tuteur);
        this.emitTuteur();
    }
    emitTuteur() {
        this.tuteur$.next(this.tuteurList.slice());
    }
    saveData() {
        return new Promise((resolve, reject) => {
            firebase.database().ref('Tuteur').set(this.tuteurList).then(
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
            firebase.database().ref('Tuteur').once('value').then(
                (data: DataSnapshot) => {
                    this.tuteurList = data.val();
                    this.emitTuteur();
                    resolve('Données récupérées avec succès !');
                }, (error) => {
                    reject(error);
                }
            );
        });
    }
}