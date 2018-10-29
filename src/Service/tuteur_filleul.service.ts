import {Subject} from 'rxjs/Subject';
import * as firebase from 'firebase';
import DataSnapshot= firebase.database.DataSnapshot; 
import { Tuteur_Filleul } from '../models/tuteur_filleul.models';

export class Tuteur_FilleulService {
tuteur_Filleul$= new Subject<Tuteur_Filleul[]>();
  tuteur_FilleulList: Tuteur_Filleul[]=[
      {
        id_tuteurFilleul:1,
        id_tuteur:1,
        id_filleul:1
      },
      {
        id_tuteurFilleul:2,
        id_tuteur:2,
        id_filleul:5
      },
      {
        id_tuteurFilleul:3,
        id_tuteur:3,
        id_filleul:4
      },
      {
        id_tuteurFilleul:4,
        id_tuteur:4,
        id_filleul:3
      },
      {
        id_tuteurFilleul:5,
        id_tuteur:5,
        id_filleul:2
      }






    
  ] ;
    addTuteur_Filleul(tuteur_Filleul: Tuteur_Filleul) {
    this.tuteur_FilleulList.push(tuteur_Filleul);
    this.emitTuteur_Filleul();
  }
  emitTuteur_Filleul(){
  this.tuteur_Filleul$.next(this.tuteur_FilleulList.slice());
  }
    saveData() {
    return new Promise((resolve, reject) => {
      firebase.database().ref('Tuteur_Filleul').set(this.tuteur_FilleulList).then(
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
      firebase.database().ref('Tuteur_Filleul').once('value').then(
        (data: DataSnapshot) => {
          this.tuteur_FilleulList = data.val();
          this.emitTuteur_Filleul();
          resolve('Données récupérées avec succès !');
        }, (error) => {
          reject(error);
        }
      );
    });
  }
}