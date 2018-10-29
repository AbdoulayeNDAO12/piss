import {Subject} from 'rxjs/Subject';
import * as firebase from 'firebase';
import DataSnapshot= firebase.database.DataSnapshot; 
import { Filleul } from '../models/Filleul.model';

export class FilleulService {
filleul$= new Subject<Filleul[]>();
filleulList: Filleul[]=[
    {
        id_filleul:1,
        situat_famillial:'orphelin',
        prenom:'Mamadou',
        nom:'NDIAYE',
        date_nais: new Date('02-10-2007')
    },
    {
        id_filleul:2,
        situat_famillial:'orphelin',
        prenom:'Fallou',
        nom:'GUEYE',
        date_nais: new Date('02-10-2008')
    },
    {
        id_filleul:3,
        situat_famillial:'orphelin',
        prenom:'Ndeye Sokhna',
        nom:'Fall',
        date_nais: new Date('02-10-2010')
    },
    {
        id_filleul:4,
        situat_famillial:'orphelin',
        prenom:'Aissatou',
        nom:'MBAYE',
        date_nais: new Date('02-10-2008')
    },
    {
        id_filleul:2,
        situat_famillial:'orphelin',
        prenom:'Abdoulaye',
        nom:'CISSE',
        date_nais: new Date('02-10-2008')
    }
      
  ] ;
    addFilleul(filleul: Filleul) {
    this.filleulList.push(filleul);
    this.emitFilleul();
  }
  emitFilleul(){
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