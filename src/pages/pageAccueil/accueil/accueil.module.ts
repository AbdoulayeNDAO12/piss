import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccueilPage } from './accueil';
import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    AccueilPage,
  ],
  imports: [
    IonicPageModule.forChild(AccueilPage),
    SuperTabsModule
  ],
})
export class AccueilPageModule {}
