import { Injectable } from '@angular/core';

import { observable, action } from 'mobx-angular';

import { State } from './state';
import { UserStore } from './user-store';

@Injectable()
export class AuthenticationStore {
    @observable state = State.SignedOff;

    constructor(private userStore: UserStore) { }

    @action authenticate(email: string, password: string) {
        this.state = State.SignedIn;

        // TODO: user should be taken from the server
        const user = this.userStore.getTestUser();
        user.email = email;
        this.userStore.setUser(user);
    }

    @action logout() {
        this.state = State.SignedOff;
    }
}
