import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccueilParrainagePage } from '../accueilParrainage/accueilParrainage';

@NgModule({
  declarations: [
    AccueilParrainagePage,
  ],
  imports: [
    IonicPageModule.forChild(AccueilParrainagePage),
  ],
})
export class AccueilParrainagePageModule {}
