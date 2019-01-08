import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccueilAssurancePage } from './accueil-assurance';

@NgModule({
  declarations: [
    AccueilAssurancePage,
  ],
  imports: [
    IonicPageModule.forChild(AccueilAssurancePage),
  ],
})
export class AccueilAssurancePageModule {}
