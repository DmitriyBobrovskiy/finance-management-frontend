import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { Routing } from './routing';
import { AuthenticationStore } from './core/authentication-store';
import { State } from './core/state';
import { toObservable } from './shared/utilities';
import { Configuration } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private authenticationStore: AuthenticationStore,
    private configuration: Configuration
  ) {
    this.initializeApp();
    this.verifyAuthentication();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  verifyAuthentication = () => {
    if (!this.configuration.verifyAuth) {
      return;
    }
    toObservable(() => this.authenticationStore.state).subscribe(state => {
      if (state === State.SignedOff) {
        this.router.navigate([Routing.Login]);
      } else if (state === State.SignedIn) {
        this.router.navigate([Routing.Transactions]);
      }
    });
  }
}
