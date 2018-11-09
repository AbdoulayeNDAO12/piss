import { Component } from "@angular/core";
import { ZakatFormPage } from "./zakat-form/zakat-form";
import { MenuController } from "ionic-angular";

@Component({
    selector: 'page-zakat',
    templateUrl: 'zakat.html'
})

export class ZakatPage {
    zForm = ZakatFormPage;
    dForm = null;
    constructor(public menuCtrl:MenuController) {
        
    }

    onToggleMenu() {
        this.menuCtrl.open();
    }
}