import { Injectable } from '@angular/core';

import { observable, action } from 'mobx-angular';

import { User } from './backend/models/user';

@Injectable()
export class UserStore {
    @observable user: User;

    constructor() {
        // TODO: for debug reasons
        const user = this.getTestUser();
        this.setUser(user);
    }

    public getTestUser() {
        return {
            mainCurrency: {
                symbol: '$',
                title: '',
                id: 0
            },
            email: 'user@email.com'
        };
    }

    @action setUser(user: User) {
        this.user = user;
    }
}
