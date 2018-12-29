import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccueilSectionParrainagePage } from './accueil-section-parrainage';
import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    AccueilSectionParrainagePage,
  ],
  imports: [
    IonicPageModule.forChild(AccueilSectionParrainagePage),
    SuperTabsModule
  ],
})
export class AccueilSectionParrainagePageModule {}
