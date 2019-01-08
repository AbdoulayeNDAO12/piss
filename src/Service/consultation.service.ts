import { Subject } from 'rxjs/Subject';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;
import { Consultation } from '../models/Consultation.models';

export class ConsultationService {
  consultation$ = new Subject<Consultation[]>();
  consultationList: Consultation[] = [{
    etat: 1,
    id_consultation: 0,
    id_hopital: 0,
    id_malade: 0,
    date:new Date(),
    id_user: 4,
    montant: 0,
    medicaments: ["djklvf", "dccd"]
  }];
  addUser(consultation: Consultation) {
    this.consultationList.push(consultation);
    this.emitConsultation();
  }
  emitConsultation() {
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