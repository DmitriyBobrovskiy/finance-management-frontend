import { Injectable } from '@angular/core';
import { observable, action } from 'mobx-angular';
import { State } from './state';

@Injectable()
export class AuthenticationStore {
    @observable state = State.SignedOff;

    @action authenticate(email: string, password: string) {
        this.state = State.SignedIn;
    }

    @action logout() {
        this.state = State.SignedOff;
    }
}
