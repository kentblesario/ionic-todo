import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public loginForm: FormGroup;
  public isLoggedIn = false;
  constructor(
    private formBuilder: FormBuilder,
    public authService: AuthService
  ) {
    this.buildRegistrationForm();
    this.checkJwt();
  }

  async buildRegistrationForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  checkJwt() {
    console.log(localStorage.getItem('jwt'));
    if (localStorage.getItem('jwt')) {
      this.isLoggedIn = true;
    }
  };

  logout(){
    localStorage.removeItem('jwt');
    this.isLoggedIn = false;
  }

  async onSubmit() {
    console.log(this.loginForm.value);
    this.authService.authenticate(this.loginForm.value).subscribe(async (res: any) => {
      if (res.status === 200) {
        console.log(res);
        localStorage.setItem('jwt', res.jwt);
        this.checkJwt();
      }
    });
    //http to backend
  }
}
