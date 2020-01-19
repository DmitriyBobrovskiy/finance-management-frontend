import { Component, OnInit } from '@angular/core';

import { AuthenticationStore } from 'src/app/core/authentication-store';
import { UserStore } from 'src/app/core/user-store';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(
    private authenticationStore: AuthenticationStore,
    public userStore: UserStore) { }

  logout = () => {
    this.authenticationStore.logout();
  }

  ngOnInit() {
  }

}
