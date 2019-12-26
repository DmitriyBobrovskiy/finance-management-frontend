import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { observable, action } from 'mobx-angular';

import { Transaction } from './backend/models/transaction';
import { State } from './state';
import { Configuration } from '../app.config';

@Injectable()
export class TransactionStore {
    @observable transactions: Transaction[] = [];
    @observable state: State = State.None;

    constructor(
        private httpClient: HttpClient,
        private configuration: Configuration) { }

    @action fetch() {
        this.state = State.Fetching;
        console.log(this.configuration.paths.transactions);
        this.httpClient
            .get<Transaction[]>(this.configuration.paths.transactions)
            .subscribe(transactions => {
                this.transactions = transactions;
                this.state = State.Completed;
            });
    }
}
