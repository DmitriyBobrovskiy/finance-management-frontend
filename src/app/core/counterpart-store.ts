import { Injectable } from '@angular/core';
import { observable, action } from 'mobx-angular';
import { Counterpart } from './backend/models/counterpart';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../app.config';
import { timeout } from 'rxjs/operators';

@Injectable()
export class CounterpartStore {
    @observable counterparts: Counterpart[] = [];

    constructor(
        private httpClient: HttpClient,
        private configuration: Configuration) {
        this.fetch();
    }

    @action fetch() {
        this.httpClient
            .get<Counterpart[]>(this.configuration.paths.counterparts)
            .pipe(timeout(this.configuration.timeouts.loading))
            .subscribe(
                counterparts => this.counterparts = counterparts,
                error => console.error(error)
            );
    }
}
