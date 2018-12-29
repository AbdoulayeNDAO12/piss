import {Subject} from 'rxjs/Subject';
import * as firebase from 'firebase';
import DataSnapshot= firebase.database.DataSnapshot; 
import { Medicament_Consultation } from '../models/medicament_consultation.model';

export class Medicament_ConsultationService {
Medicament_Consultation$= new Subject<Medicament_Consultation[]>();
  Medicament_ConsultationList: Medicament_Consultation[]=[
    {
      medicament:"Frakidex",
      id_consultation:1
    },
    {
      medicament:"Doliprane",
      id_consultation:1
    }
   
  ] ;
    addMedicament_Consultation(Medicament_Consultation: Medicament_Consultation) {
    this.Medicament_ConsultationList.push(Medicament_Consultation);
    this.emitMedicament_Consultation();
  }
  emitMedicament_Consultation(){
  this.Medicament_Consultation$.next(this.Medicament_ConsultationList.slice());
  }
    saveData() {
    return new Promise((resolve, reject) => {
      firebase.database().ref('Medicament_Consultation').set(this.Medicament_ConsultationList).then(
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
      firebase.database().ref('Medicament_Consultation').once('value').then(
        (data: DataSnapshot) => {
          this.Medicament_ConsultationList = data.val();
          this.emitMedicament_Consultation();
          resolve('Données récupérées avec succès !');
        }, (error) => {
          reject(error);
        }
      );
    });
  }
}