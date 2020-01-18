import { Component, OnInit } from '@angular/core';

import { AuthenticationStore } from 'src/app/core/authentication-store';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private authenticationStore: AuthenticationStore) { }

  logout = () => {
    this.authenticationStore.logout();
  }

  ngOnInit() {
  }

}
