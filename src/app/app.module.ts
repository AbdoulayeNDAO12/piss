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
import { AuthService } from '../Service/auth.sevice';
import { AccueilPage } from '../pages/pageAccueil/accueil/accueil';
import { InscriptionPage } from '../pages/inscription/inscription';


import { NotificationPage } from '../pages/notification/notification';
import { ParrainageEnfantPage } from '../pages/Parrainage/parrainageEnfant/parrainageEnfant';
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
import { DescriptionInstitutionPage } from '../pages/Parrainage/description-institution/description-institution';
import { FormParrainageEnfantPage } from '../pages/Parrainage/formParrainageEnfant/formParrainageEnfant';
import { ZakatFormPage } from '../pages/zakat/zakat-form/zakat-form';
import { FormParrainageInstitutionPage } from '../pages/Parrainage/form-parrainage-institution/form-parrainage-institution';
import { ParrainService } from '../Service/parrain.service';
import { InstitutionParrainService } from '../Service/institution_parrain.service';
import { DonPage } from '../pages/don/don';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { ConsutationMaladePage } from '../pages/consutation-malade/consutation-malade';
import { VenteMedicamentPage } from '../pages/vente-medicament/vente-medicament';
import { Medicament_ConsultationService } from '../Service/medicament_consultation.service';
import { MedicamentService } from '../Service/medicament.service';
import { ConsutationMaladePageModule } from '../pages/consutation-malade/consutation-malade.module';
import { VenteMedicamentPageModule } from '../pages/vente-medicament/vente-medicament.module';
import { DonPageModule } from '../pages/don/don.module';
import { AccueilSectionAssurancePage } from '../pages/pageAccueil/accueil-section-assurance/accueil-section-assurance';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';
import { QrcodePage } from '../pages/qrcode/qrcode';

import { NgxQRCodeModule } from 'ngx-qrcode2';
import { AccueilAssurancePageModule } from '../pages/pageAccueil/accueil-assurance/accueil-assurance.module';
import { AccueilParrainagePageModule } from '../pages/Parrainage/accueilParrainage/accueilParrainage.module';
import { ZakatPageModule } from '../pages/zakat/zakat.module';
import { AuthPageModule } from '../pages/auth/auth.module';
import { ReglagesPage } from '../pages/reglages/reglages';
import { HistoriquePage } from '../pages/historique/historique';
import { ComptePage } from '../pages/compte/compte';
import { ConfirmationpaiePage } from '../pages/confirmationpaie/confirmationpaie';
import { HttpClientModule } from '@angular/common/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ConfirmationParrainagePage } from '../pages/confirmation-parrainage/confirmation-parrainage';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AccueilPage,
    InscriptionPage,
    ZakatFormPage,
    NotificationPage,
    ParrainageEnfantPage,
    ParrainageInstitutionPage,
    HistoireFilleulPage,
    DescriptionInstitutionPage,
    FormParrainageEnfantPage,
    FormParrainageInstitutionPage,
    QrcodePage,
    HistoriquePage,
    ReglagesPage,
    ComptePage,
    ConfirmationpaiePage,
    ConfirmationParrainagePage
   
  ],
  imports: [
    FormsModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SuperTabsModule.forRoot(),
    ConsutationMaladePageModule,
    VenteMedicamentPageModule,
    DonPageModule,
    NgxQRCodeModule,
    DonPageModule,
    ConsutationMaladePageModule,
    VenteMedicamentPageModule,
    AccueilAssurancePageModule,
    AccueilParrainagePageModule,
    ZakatPageModule,
    AuthPageModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AccueilPage,
    InscriptionPage,
    ZakatFormPage,
    NotificationPage,
    ParrainageEnfantPage,
    ParrainageInstitutionPage,
    HistoireFilleulPage,
    DescriptionInstitutionPage,
    FormParrainageEnfantPage,
    FormParrainageInstitutionPage,
    DonPage,
    ConsutationMaladePage,
    VenteMedicamentPage,
    QrcodePage,
    HistoriquePage,
    ReglagesPage,
    ComptePage,
    ConfirmationpaiePage,
    ConfirmationParrainagePage
    
  ],
  providers: [
    StatusBar,
    BarcodeScanner,
    Toast,
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
    Medicament_ConsultationService,
    InstitutionParrainService,
    MedicamentService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    InAppBrowser
  ]
})
export class AppModule {}