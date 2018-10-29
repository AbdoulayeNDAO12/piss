import {Subject} from 'rxjs/Subject';
import * as firebase from 'firebase';
import DataSnapshot= firebase.database.DataSnapshot; 
import { Compte } from '../models/Compte.models';

export class CompteService {
compte$= new Subject<Compte[]>();
  compteList: Compte[]=[
      {
        id_compte:1,
        solde:0
      },
      {
        id_compte:1,
        solde:0
      },
      {
        id_compte:2,
        solde:0
      },
      {
        id_compte:3,
        solde:0
      },
      {
        id_compte:4,
        solde:0
      },
      {
        id_compte:5,
        solde:0
      },
      {
        id_compte:6,
        solde:0
      },
      {
        id_compte:7,
        solde:0
      },
      {
        id_compte:8,
        solde:0
      },
      {
        id_compte:9,
        solde:0
      },
      {
        id_compte:10,
        solde:0
      }
    
  ] ;
    addCompte(compte: Compte) {
    this.compteList.push(compte);
    this.emitCompte();
  }
  emitCompte(){
  this.compte$.next(this.compteList.slice());
  }
    saveData() {
    return new Promise((resolve, reject) => {
      firebase.database().ref('Compte').set(this.compteList).then(
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
      firebase.database().ref('Compte').once('value').then(
        (data: DataSnapshot) => {
          this.compteList = data.val();
          this.emitCompte();
          resolve('Données récupérées avec succès !');
        }, (error) => {
          reject(error);
        }
      );
    });
  }
}