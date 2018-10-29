import {Subject} from 'rxjs/Subject';
import * as firebase from 'firebase';
import DataSnapshot= firebase.database.DataSnapshot; 
import { Notification } from '../models/Notification.models';

export class NotificationService {
notification$= new Subject<Notification[]>();
  notificationList: Notification[]=[ ] ;
    addNotification(notification: Notification) {
    this.notificationList.push(notification);
    this.emitNotification();
  }
  emitNotification(){
  this.notification$.next(this.notificationList.slice());
  }
    saveData() {
    return new Promise((resolve, reject) => {
      firebase.database().ref('Notification').set(this.notificationList).then(
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
      firebase.database().ref('Notification').once('value').then(
        (data: DataSnapshot) => {
          this.notificationList = data.val();
          this.emitNotification();
          resolve('Notificationnées récupérées avec succès !');
        }, (error) => {
          reject(error);
        }
      );
    });
  }
}