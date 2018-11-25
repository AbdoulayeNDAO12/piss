import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccueilZakatPage } from './accueil-zakat';

@NgModule({
  declarations: [
    AccueilZakatPage,
  ],
  imports: [
    IonicPageModule.forChild(AccueilZakatPage),
  ],
})
export class AccueilZakatPageModule {}
