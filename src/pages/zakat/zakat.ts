import { Component } from "@angular/core";
import { ZakatFormPage } from "./zakat-form/zakat-form";
import { MenuController, NavController, NavParams } from "ionic-angular";

@Component({
    selector: 'page-zakat',
    templateUrl: 'zakat.html'
})

export class ZakatPage {
    zForm = ZakatFormPage;
    dForm = null;
    constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl:MenuController) {
        
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ZakatPage');
      }

    onToggleMenu() {
        this.menuCtrl.open();
    }
}