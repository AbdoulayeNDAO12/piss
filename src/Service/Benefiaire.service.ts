import {Subject} from 'rxjs/Subject';
import * as firebase from 'firebase';
import DataSnapshot= firebase.database.DataSnapshot; 
import { Beneficiaire } from '../models/Beneficiaire.models';

export class BeneficiaireService {
beneficiaire$= new Subject<Beneficiaire[]>();
beneficiaireList: Beneficiaire[]=[
      {
        id_benef:1,
        situat_matrim:'Marié',
        nbre_enf:10,
        revenu:70000,
        id_user:1,
      },
      {
        id_benef:2,
        situat_matrim:'Veuve',
        nbre_enf:5,
        revenu:50000,
        id_user:2,
      },
      {
        id_benef:3,
        situat_matrim:'Marié',
        nbre_enf:15,
        revenu:35000,
        id_user:3,
      },
      {
        id_benef:4,
        situat_matrim:'Veuve',
        nbre_enf:10,
        revenu:30000,
        id_user:4,
      },
      {
        id_benef:5,
        situat_matrim:'Veuf',
        nbre_enf:8,
        revenu:25000,
        id_user:5,
      }
  ] ;
    addBeneficiaire(beneficiaire: Beneficiaire) {
    this.beneficiaireList.push(beneficiaire);
    this.emitBeneficiaire();
  }
  emitBeneficiaire(){
  this.beneficiaire$.next(this.beneficiaireList.slice());
  }
    saveData() {
    return new Promise((resolve, reject) => {
      firebase.database().ref('Beneficiaire').set(this.beneficiaireList).then(
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
      firebase.database().ref('Beneficiaire').once('value').then(
        (data: DataSnapshot) => {
          this.beneficiaireList = data.val();
          this.emitBeneficiaire();
          resolve('Données récupérées avec succès !');
        }, (error) => {
          reject(error);
        }
      );
    });
  }
}