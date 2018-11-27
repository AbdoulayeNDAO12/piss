import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VenteMedicamentPage } from './vente-medicament';

@NgModule({
  declarations: [
    VenteMedicamentPage,
  ],
  imports: [
    IonicPageModule.forChild(VenteMedicamentPage),
  ],
})
export class VenteMedicamentPageModule {}
