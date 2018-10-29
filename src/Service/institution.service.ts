import {Subject} from 'rxjs/Subject';
import * as firebase from 'firebase';
import DataSnapshot= firebase.database.DataSnapshot; 
import { Institution } from '../models/Institution.models';

export class InstitutionService {
    institution$= new Subject<Institution[]>();
institutionList: Institution[]=[
    {
        id_institution:1,
        nom:'KEUR ARAME',
        adresse:'DAKAR,Avenue Bourguiba',
        nbre_enfant:100,
        email:'keurarame@gmail.com',
        telephone:'33 599 96 23'
    },
    {
        id_institution:2,
        nom:'DAARA SERIGNE NGAGNE',
        adresse:'Medine Baye,KAOLACK',
        nbre_enfant:150,
        email:'daaraserignengagne@gmail.com',
        telephone:'76 254 25 21'
    },
    {
        id_institution:3,
        nom:'DAARA ABDOU GUEYE',
        adresse:'THIES,HERSENT',
        nbre_enfant:75,
        email:'daaaabdou@gmail.com',
        telephone:'77 562 54 45'
    },
    {
        id_institution:4,
        nom:'VILLAGE DES ENFANTS',
        adresse:'DAKAR,SACRE COEUR',
        nbre_enfant:200,
        email:'villagedesenfants@gmail.com',
        telephone:'33 745 21 25'
    },
    {
        id_institution:5,
        nom:'DAARA OUZTAZ FAYE',
        adresse:'KOLDA,Avenue BROUMA',
        nbre_enfant:105,
        email:'daaraouztazfaye@gmail.com',
        telephone:'76 102 12 35'
    }
  
  ] ;
    addInstitution(institution: Institution) {
    this.institutionList.push(institution);
    this.emitInstitution();
  }
  emitInstitution(){
  this.institution$.next(this.institutionList.slice());
  }
    saveData() {
    return new Promise((resolve, reject) => {
      firebase.database().ref('Institution').set(this.institutionList).then(
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
      firebase.database().ref('Institution').once('value').then(
        (data: DataSnapshot) => {
          this.institutionList = data.val();
          this.emitInstitution();
          resolve('Données récupérées avec succès !');
        }, (error) => {
          reject(error);
        }
      );
    });
  }
}