import { FormsModule } from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthPage } from '../pages/auth/auth';
import { AuthService } from '../Service/auth.sevice';
import { AccueilPage } from '../pages/accueil/accueil';
import { InscriptionPage } from '../pages/inscription/inscription';
import { ZakatPage } from '../pages/zakat/zakat';
import { AccueilParrainagePage} from '../pages/Parrainage/accueilParrainage/accueilParrainage';

import { NotificationPage } from '../pages/notification/notification';
import { ParrainageEnfantPage } from '../pages/Parrainage/parrainageEnfant/parrainageEnfant';
import { DonParrainagePage} from '../pages/Parrainage/donParrainage/donParrainage';
import { HistoriqueParrainagePage } from '../pages/Parrainage/historiqueParrainage/historiqueParrainage';
import { InfosParrainagePage } from '../pages/Parrainage/infosParrainage/infosParrainage';
import { ParrainageInstitutionPage } from '../pages/Parrainage/parrainageInstitution/parrainageInstitution';
import { UserService } from '../Service/utilisateur.service';
import { TuteurService } from '../Service/tuteur.service';
import { BeneficiaireService } from '../Service/Benefiaire.service';
import { CompteService } from '../Service/compte.service';
import { FilleulService } from '../Service/filleul.service';
import { HopitalService } from '../Service/hopital.service';
import { InstitutionService } from '../Service/institution.service';
import { PharmacieService } from '../Service/pharmacie.service';
import { PrestataireService } from '../Service/prestataire.service';
import { Tuteur_FilleulService } from '../Service/tuteur_filleul.service';
import { Tuteur_InstitutionService } from '../Service/tuteur_institution.service';
import { VersementService } from '../Service/versement.service';
import { Donneur_ZakatService } from '../Service/donneur_zakat.service';
import { DonneurService } from '../Service/Donneur.service';
import { DonService } from '../Service/don.service';
import { NotificationService } from '../Service/notification.service';
import { ConsultationService } from '../Service/consultation.service';
import { RemboursementService } from '../Service/remboursement.service';
import { AllocationService } from '../Service/allocation.service';
import { HistoireFilleulPage } from '../pages/Parrainage/histoireFilleul/histoireFilleul';
import { FormParrainageEnfantPage } from '../pages/Parrainage/formParrainageEnfant/formParrainageEnfant';
import { ZakatFormPage } from '../pages/zakat/zakat-form/zakat-form';
import { FormParrainageInstitutionPage } from '../pages/Parrainage/form-parrainage-institution/form-parrainage-institution';
import { ParrainService } from '../Service/parrain.service';
import { InstitutionParrainService } from '../Service/institution_parrain.service';
import { DonPage } from '../pages/don/don';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AuthPage,
    AccueilPage,
    InscriptionPage,
    ZakatPage,
    ZakatFormPage,
    AccueilParrainagePage,
    NotificationPage,
    ParrainageEnfantPage,
    DonParrainagePage,
    HistoriqueParrainagePage,
    InfosParrainagePage,
    ParrainageInstitutionPage,
    HistoireFilleulPage,
    FormParrainageEnfantPage,
    FormParrainageInstitutionPage,
    DonPage
  ],
  imports: [
    FormsModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AuthPage,
    AccueilPage,
    InscriptionPage,
    ZakatPage,
    ZakatFormPage,
    AccueilParrainagePage,
    NotificationPage,
    ParrainageEnfantPage,
    DonParrainagePage,
    HistoriqueParrainagePage,
    InfosParrainagePage,
    ParrainageInstitutionPage,
    HistoireFilleulPage,
    FormParrainageEnfantPage,
    FormParrainageInstitutionPage,
    DonPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    UserService,
    TuteurService,
    BeneficiaireService,
    CompteService,
    FilleulService,
    HopitalService,
    InstitutionService,
    PharmacieService,
    PrestataireService,
    Tuteur_FilleulService,
    Tuteur_InstitutionService,
    VersementService,
    Donneur_ZakatService,
    DonneurService,
    DonService,
    NotificationService,
    ConsultationService,
    RemboursementService,
    AllocationService,
    ParrainService,
    InstitutionParrainService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
