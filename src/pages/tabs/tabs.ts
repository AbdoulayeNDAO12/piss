import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { AccueilPage } from '../accueil/accueil';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AccueilPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
