import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TypeaheadModule } from 'ngx-bootstrap';
import { DatePicker } from '@ionic-native/date-picker/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionStore } from './core/transaction-store';
import { Configuration } from './app.config';
import { CategoryStore } from './core/category-store';
import { AccountStore } from './core/account-store';
import { CounterpartStore } from './core/counterpart-store';
import { AuthenticationStore } from './core/authentication-store';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    TypeaheadModule.forRoot(),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DatePicker,
    HttpClient,


    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Configuration,

    AuthenticationStore,
    TransactionStore,
    CategoryStore,
    AccountStore,
    CounterpartStore,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
