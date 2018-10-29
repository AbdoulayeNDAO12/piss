import {Subject} from 'rxjs/Subject';
import * as firebase from 'firebase';
import DataSnapshot= firebase.database.DataSnapshot; 
import { Allocation } from '../models/Allocation.models';

export class AllocationService {
allocation$= new Subject<Allocation[]>();
  allocationList: Allocation[]=[ ] ;
    addAllocation(Allocation: Allocation) {
    this.allocationList.push(Allocation);
    this.emitAllocation();
  }
  emitAllocation(){
  this.allocation$.next(this.allocationList.slice());
  }
    saveData() {
    return new Promise((resolve, reject) => {
      firebase.database().ref('Allocation').set(this.allocationList).then(
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
      firebase.database().ref('Allocation').once('value').then(
        (data: DataSnapshot) => {
          this.allocationList = data.val();
          this.emitAllocation();
          resolve('Données récupérées avec succès !');
        }, (error) => {
          reject(error);
        }
      );
    });
  }
}