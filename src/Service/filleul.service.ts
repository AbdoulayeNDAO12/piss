import { Subject } from 'rxjs/Subject';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;
import { Filleul } from '../models/Filleul.model';
import { DateTime } from 'ionic-angular';

export class FilleulService {
  filleul$ = new Subject<Filleul[]>();
  filleulList: Filleul[] =[ {
    id_filleul : 1,
    nom: "NDIAYE",
    prenom : "Mamadou",
    situat_famillial : "orphelin",
    date_nais: "05-10-2002",
    id_parrain:0
  }, {
    id_filleul : 2,
    nom: "GUEYE",
    prenom : "Fallou",
    situat_famillial : "orphelin",
    date_nais: "12-06-2003",
    id_parrain:0
  }, {
    id_filleul : 3,
    nom : "Fall",
    prenom : "Ndeye Sokhna",
    situat_famillial : "orphelin",
    date_nais: "17-05-2002",
    id_parrain:0
  }, {
    id_filleul : 4,
    nom: "MBAYE",
    prenom: "Aissatou",
    situat_famillial : "orphelin",
    date_nais: "05-10-2005",
    id_parrain:0
  }, {
    id_filleul : 2,
    nom : "CISSE",
    prenom : "Abdoulaye",
    situat_famillial : "orphelin",
    date_nais: "25-11-2002",
    id_parrain:0
  } ];
  addFilleul(filleul: Filleul) {
    this.filleulList.push(filleul);
    this.emitFilleul();
  }
  emitFilleul() {
    this.filleul$.next(this.filleulList.slice());
  }
  saveData() {
    return new Promise((resolve, reject) => {
      firebase.database().ref('Filleul').set(this.filleulList).then(
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
      firebase.database().ref('Filleul').once('value').then(
        (data: DataSnapshot) => {
          this.filleulList = data.val();
          this.emitFilleul();
          resolve('Données récupérées avec succès !');
        }, (error) => {
          reject(error);
        }
      );
    });
  }
}