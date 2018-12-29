import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccueilSectionAssurancePage } from './accueil-section-assurance';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  declarations: [
    AccueilSectionAssurancePage,
  ],
  imports: [
    IonicPageModule.forChild(AccueilSectionAssurancePage),
    NgxQRCodeModule
  ],
})
export class AccueilSectionAssurancePageModule {}
