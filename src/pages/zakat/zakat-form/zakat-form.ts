import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'page-zakat-form',
  templateUrl: 'zakat-form.html',
})
export class ZakatFormPage implements OnInit{

  zakatForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.zakatForm = this.formBuilder.group({
          prenom:['',  Validators.required],
          nom:['',  Validators.required],
          telephone:['',  Validators.required],
          email: ['', [Validators.required, Validators.email]],
          sum: ['', [Validators.required, Validators.nullValidator]],
          checkbox:['',Validators.required]
    });
  }

  onConfirmDonation() {
    
  }
}
