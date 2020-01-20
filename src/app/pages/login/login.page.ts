import { Component, OnInit } from '@angular/core';
import { AuthenticationStore } from 'src/app/core/authentication-store';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup = null;
  constructor(
    private authenticationStore: AuthenticationStore,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.resetForm();
  }

  login = () => {
    const values = this.form.value;

    this.authenticationStore.authenticate(values.email, values.password);
    this.resetForm();
  }

  resetForm = () => {
    this.form = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }
}
