import { Injectable } from '@angular/core';
import { observable, action } from 'mobx-angular';
import { HttpClient } from '@angular/common/http';
import { timeout } from 'rxjs/operators';

import { Configuration } from '../app.config';
import { Account } from './backend/models/account';

@Injectable()
export class AccountStore {
    @observable accounts: Account[] = [];

    constructor(
        private httpClient: HttpClient,
        private configuration: Configuration) {
        this.fetch();
    }

    @action fetch() {
        this.httpClient
            .get<Account[]>(this.configuration.paths.accounts)
            .pipe(timeout(this.configuration.timeouts.loading))
            .subscribe(
                accounts => this.accounts = accounts,
                error => console.error(error));
    }
}
