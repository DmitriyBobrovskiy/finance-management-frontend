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
    this.form = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  login = () => {
    const values = this.form.value;

    this.authenticationStore.authenticate(values.email, values.password);
    // TODO: form is not resetting after authentication
  }
}
