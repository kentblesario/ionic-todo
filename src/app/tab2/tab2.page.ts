import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public registrationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.buildRegistrationForm();
   }

  async buildRegistrationForm() {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]]
    });
  }

  async onSubmit(){
    console.log(this.registrationForm);
  }

}
