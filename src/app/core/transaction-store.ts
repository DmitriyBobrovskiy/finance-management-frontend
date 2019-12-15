import { Injectable } from '@angular/core';

import { observable, action } from 'mobx-angular';
import { Transaction } from './backend/models/transaction';
import { HttpClient } from '@angular/common/http';
import { State } from './state';

@Injectable()
export class TransactionStore {
    @observable transactions: Transaction[] = [];
    @observable state: State = State.None;

    constructor(private httpClient: HttpClient) { }

    @action fetch() {
        // TODO: move to configuration
        const uri = 'http://192.168.0.106:63732/api/transactions';

        this.state = State.Fetching;
        this.httpClient
            .get<Transaction[]>(uri)
            .subscribe(transactions => {
                this.transactions = transactions;
                this.state = State.Completed;
            });
    }
}