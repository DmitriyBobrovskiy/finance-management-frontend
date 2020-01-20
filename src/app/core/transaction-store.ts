import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { observable, action } from 'mobx-angular';

import { Transaction } from './backend/models/transaction';
import { State } from './state';
import { Configuration } from '../app.config';
import { timeout } from 'rxjs/operators';

@Injectable()
export class TransactionStore {
    @observable transactions: Transaction[] = [];
    @observable state: State = State.None;

    constructor(
        private httpClient: HttpClient,
        private configuration: Configuration) {
        // TODO: temporary - delete after debugging
        this.transactions.push({
            id: 1,
            transactionTypeId: 1,
            date: new Date('2019-11-27T13:04:12.4123769+00:00'),
            amount: 5965,
            counterpartId: 4,
            counterpart: {
                id: 4,
                title: 'ИП Мясников Николай Иванович'
            },
            accountId: 733,
            account: {
                id: 733,
                title: 'Тинькофф рубли',
                accountType: {
                    id: 2,
                    title: 'Кредитная карта'
                },
                currency: {
                    id: 3,
                    title: 'Рубли',
                    symbol: '₽'
                }
            },
            categoryId: 2,
            category: {
                id: 2,
                title: 'Свободные',
                icon: {
                    tag: 'fas fa-money-bill-wave'
                }
            },
            description: null,
            loanTypeId: null,
            loanType: null
        });
    }

    @action fetch() {
        this.state = State.Fetching;
        this.httpClient
            .get<Transaction[]>(this.configuration.paths.transactions)
            .pipe(timeout(this.configuration.timeouts.loading))
            .subscribe(
                transactions => {
                    this.transactions = transactions;
                    this.state = State.Completed;
                },
                error => {
                    this.state = State.Error;
                    console.error(error);
                });
    }

    @action add(transaction: Transaction) {

    }
}
