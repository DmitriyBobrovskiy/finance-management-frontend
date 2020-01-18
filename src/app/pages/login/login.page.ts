import { Component, OnInit } from '@angular/core';
import { AuthenticationStore } from 'src/app/core/authentication-store';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authenticationStore: AuthenticationStore) { }

  ngOnInit() {
  }

  login = () => {
    this.authenticationStore.authenticate(null, null);
  }
}
