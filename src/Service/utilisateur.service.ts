import {Subject} from 'rxjs/Subject';
import * as firebase from 'firebase';
import DataSnapshot= firebase.database.DataSnapshot; 
import { Utilisateur } from '../models/Utilisateur.models';

export class UserService {
utilisateur$= new Subject<Utilisateur[]>();
  utilisateurList: Utilisateur[]=[
      {
        id_user:1,
        prenom:'Ibrahima',
        nom:'FALL',
        date_nais:new Date('05-01-1977'),
        adresse:'Yembeul',
        telephone:'77 584 25 10',
        sexe:'Masculin',
        email:'',
        profession:'Ouvrier',
        mot_de_passe:'fallibrabro',
        type_user:'Beneficiaire'
      },
      {
        id_user:2,
        prenom:'Sokhna Fanta',
        nom:'NDIAYE',
        date_nais:new Date('25-10-1959'),
        adresse:'PIKINE',
        telephone:'70 800 41 00',
        sexe:'Feminin',
        email:'',
        profession:'Menagere',
        mot_de_passe:'sfndiaye',
        type_user:'Beneficiaire'
      },
      {
        id_user:3,
        prenom:'Ousseynou',
        nom:'DIOP',
        date_nais:new Date('05-01-1966'),
        adresse:'DIAMAGUEUNE,LOUGA',
        telephone:'77 652 45 41',
        sexe:'Masculin',
        email:'ousseynou@gmail.com',
        profession:'Retraite',
        mot_de_passe:'ousseynou_ndiaye',
        type_user:'Beneficiaire'
      },
      {
        id_user:4,
        prenom:'Adja Fatou',
        nom:'SEYE',
        date_nais:new Date('15-11-1970'),
        adresse:'CITE SENGHOR, THIES',
        telephone:'76 401 21 07',
        sexe:'Feminin',
        email:'fatouseye@gmail.com',
        profession:'Menagere',
        mot_de_passe:'fatseye',
        type_user:'Beneficiaire'
      },
      {
        id_user:5,
        prenom:'Pape Modou',
        nom:'GUEYE',
        date_nais:new Date('17-03-1964'),
        adresse:'GUET NDAR, SAINT-LUIS',
        telephone:'70 125 21 26',
        sexe:'Masculin',
        email:'',
        profession:'Ouvrier',
        mot_de_passe:'pamodou142',
        type_user:'Beneficiaire'
      },
      {
        id_user:6,
        prenom:'Fatoumata',
        nom:'BA',
        date_nais:new Date('17-03-1985'),
        adresse:'MEMOZ, DAKAR',
        telephone:'77 452 12 22',
        sexe:'Feminin',
        email:'bafatoumat@gmail.com',
        profession:'Medecin',
        mot_de_passe:'bafatou1234',
        type_user:'Prestataire'
      },
      {
        id_user:7,
        prenom:'Saliou',
        nom:'SY',
        date_nais:new Date('17-03-1986'),
        adresse:'CITE AVION, DAKAR',
        telephone:'77 445 10 22',
        sexe:'Masculin',
        email:'sysaliou@gmail.com',
        profession:'Medecin',
        mot_de_passe:'saliousy1234',
        type_user:'Prestataire'
      },
      {
        id_user:8,
        prenom:'Sidy',
        nom:'DIOP',
        date_nais:new Date('17-03-1982'),
        adresse:'KARACK, DAKAR',
        telephone:'77 405 10 22',
        sexe:'Masculin',
        email:'sydydiop@gmail.com',
        profession:'Enseignant',
        mot_de_passe:'sididiop1234',
        type_user:'Tuteur'
      },
      {
        id_user:9,
        prenom:'Coumba',
        nom:'SAGNA',
        date_nais:new Date('23-05-1980'),
        adresse:'PIKINE GUINAW RAIL',
        telephone:'77 405 12 02',
        sexe:'Feminin',
        email:'coumbasagna@gmail.com',
        profession:'Commerçante',
        mot_de_passe:'coubiss1234',
        type_user:'Tuteur'
      },
      {
        id_user:10,
        prenom:'Fatou',
        nom:'SYLLA',
        date_nais:new Date('11-02-1978'),
        adresse:'KEBEMER',
        telephone:'70 705 10 21',
        sexe:'Feminin',
        email:'syllafatou@gmail.com',
        profession:'Comptable',
        mot_de_passe:'fatou1234',
        type_user:'Tuteur'
      },
      {
        id_user:11,
        prenom:'Mamour',
        nom:'DIOP',
        date_nais:new Date('11-02-1975'),
        adresse:'DIAMAGUEUNE,THIES',
        telephone:'77 755 45 21',
        sexe:'Masculin',
        email:'mamoudiop@gmail.com',
        profession:'Commerçant',
        mot_de_passe:'diop1234',
        type_user:'Tuteur'
      },
      {
        id_user:12,
        prenom:'Fallou',
        nom:'DIENG',
        date_nais:new Date('11-02-1972'),
        adresse:'GUEDIAWAYE, DAKAR',
        telephone:'76 700 10 21',
        sexe:'Masculin',
        email:'diengfallou@gmail.com',
        profession:'Ouvrier',
        mot_de_passe:'fallou1234',
        type_user:'Tuteur'
      },
      {
        id_user:13,
        prenom:'Biram',
        nom:'DIOUF',
        date_nais:new Date('11-12-1978'),
        adresse:'BETOUAR,KAOLACK',
        telephone:'77 815 10 21',
        sexe:'Masculin',
        email:'iboufall@gmail.com',
        profession:'Commerçant',
        mot_de_passe:'ibou1234',
        type_user:'Tuteur'
      },
      {
        id_user:14,
        prenom:'Malick',
        nom:'NDIAYE',
        date_nais:new Date('21-08-1980'),
        adresse:'RUFISQUE',
        telephone:'77 015 10 54',
        sexe:'Masculin',
        email:'malickndiaye@gmail.com',
        profession:'Cuisinier',
        mot_de_passe:'malick1234',
        type_user:'Tuteur'
      },
      {
        id_user:15,
        prenom:'Siré',
        nom:'DIA',
        date_nais:new Date('01-02-1977'),
        adresse:'MBOUR',
        telephone:'76 625 10 21',
        sexe:'Feminin',
        email:'siredia@gmail.com',
        profession:'consultant',
        mot_de_passe:'sire1234',
        type_user:'Tuteur'
      },
      {
        id_user:16,
        prenom:'Fatou',
        nom:'MBAYE',
        date_nais:new Date('15-07-1978'),
        adresse:'PARCELLES ASSAINIES, DAKAR',
        telephone:'77 255 12 17',
        sexe:'Feminin',
        email:'mbayefatou@gmail.com',
        profession:'Comptable',
        mot_de_passe:'fatoum1234',
        type_user:'Tuteur'
      },
      {
        id_user:17,
        prenom:'Rokhaya',
        nom:'SALL',
        date_nais:new Date('12-02-1970'),
        adresse:'DIOURBEL',
        telephone:'70 489 20 21',
        sexe:'Feminin',
        email:'rokhayasall@gmail.com',
        profession:'Commerçante',
        mot_de_passe:'rokhaya1234',
        type_user:'Tuteur'
      }
      

  ] ;
    addUser(utilisateur: Utilisateur) {
    this.utilisateurList.push(utilisateur);
    this.emitUser();
  }
  emitUser(){
  this.utilisateur$.next(this.utilisateurList.slice());
  }
    saveData() {
    return new Promise((resolve, reject) => {
      firebase.database().ref('Utilisateur').set(this.utilisateurList).then(
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
      firebase.database().ref('Utilisateur').once('value').then(
        (data: DataSnapshot) => {
          this.utilisateurList = data.val();
          this.emitUser();
          resolve('Données récupérées avec succès !');
        }, (error) => {
          reject(error);
        }
      );
    });
  }
}