import {Subject} from 'rxjs/Subject';
import * as firebase from 'firebase';
import DataSnapshot= firebase.database.DataSnapshot; 
import { Utilisateur } from '../models/Utilisateur.models';

export class UserService {
utilisateur$= new Subject<Utilisateur[]>();
  utilisateurList: Utilisateur[]=[] ;
  isAuth = false;

  constructor() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isAuth = true;
      } else {
        this.isAuth = false;
      }
    });
  }
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
  signUpUser(email: string, password: string) {
    return new Promise((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, password).then(
        (user) => {
          resolve(user);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  signInUser(email: string, password: string) {
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password).then(
        (user) => {
          resolve(user);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}