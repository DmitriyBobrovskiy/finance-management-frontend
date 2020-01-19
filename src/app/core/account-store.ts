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
        // TODO: for debug reasons
        this.accounts = [
            {
                id: 1,
                title: 'Тинькофф рубли',
                accountType: {
                    id: 1,
                    title: 'Наличные'
                },
                currency: {
                    id: 1,
                    title: 'Рубли',
                    symbol: '₽'
                }
            },
            {
                id: 2,
                title: 'Сбербанк',
                accountType: {
                    id: 3,
                    title: 'Дебетовая карта'
                },
                currency: {
                    id: 4,
                    title: 'Юани',
                    symbol: '¥'
                }
            },
            {
                id: 6,
                title: 'Юани с поездки',
                accountType: {
                    id: 3,
                    title: 'Дебитовая карта'
                },
                currency: {
                    id: 4,
                    title: 'Юани',
                    symbol: '¥'
                }
            },
            {
                id: 11,
                title: 'Наличные доллары',
                accountType: {
                    id: 2,
                    title: 'Кредитная карта'
                },
                currency: {
                    id: 4,
                    title: 'Доллары',
                    symbol: '$'
                }
            },
            {
                id: 20,
                title: 'Тинькофф доллары',
                accountType: {
                    id: 2,
                    title: 'Кредитная карта'
                },
                currency: {
                    id: 4,
                    title: 'Доллары',
                    symbol: '$'
                }
            },
            {
                id: 20,
                title: 'Альфа-Банк евро',
                accountType: {
                    id: 2,
                    title: 'Кредитная карта'
                },
                currency: {
                    id: 4,
                    title: 'Евро',
                    symbol: '€'
                }
            },
        ];
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
