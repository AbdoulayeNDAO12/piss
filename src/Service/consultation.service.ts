import {Subject} from 'rxjs/Subject';
import * as firebase from 'firebase';
import DataSnapshot= firebase.database.DataSnapshot; 
import { Consultation } from '../models/Consultation.models';

export class ConsultationService {
consultation$= new Subject<Consultation[]>();
  consultationList: Consultation[]= [ ] ;
    addUser(consultation: Consultation) {
    this.consultationList.push(consultation);
    this.emitConsultation();
  }
  emitConsultation(){
  this.consultation$.next(this.consultationList.slice());
  }
    saveData() {
    return new Promise((resolve, reject) => {
      firebase.database().ref('Consultation').set(this.consultationList).then(
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
      firebase.database().ref('Consultation').once('value').then(
        (data: DataSnapshot) => {
          this.consultationList = data.val();
          this.emitConsultation();
          resolve('Données récupérées avec succès !');
        }, (error) => {
          reject(error);
        }
      );
    });
  }
}