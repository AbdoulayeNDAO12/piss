import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { AccueilPage } from '../accueil/accueil';
import { NotificationPage } from '../notification/notification';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AccueilPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = NotificationPage;

  constructor() {

  }
}
