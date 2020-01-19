import { Injectable } from '@angular/core';

import { observable } from 'mobx-angular';

@Injectable()
export class UserStore {
    @observable mainCurrency: string;

    constructor() {
        // TODO: for debug reasons
        this.mainCurrency = '$';
    }
}
