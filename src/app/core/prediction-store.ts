import { Injectable } from '@angular/core';

import { observable, action } from 'mobx-angular';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../app.config';
import { timeout } from 'rxjs/operators';

@Injectable()
export class PredictionStore {
    @observable futureSpends: number;

    constructor(
        private httpClient: HttpClient,
        private configuration: Configuration) {}

    @action predict(monthsToAnalyze: number, daysToPredict: number) {
        // this.httpClient
        //     .get<number[]>(this.configuration.paths.prediction)
        //     .pipe(timeout(this.configuration.timeouts.loading))
        //     .subscribe(
        //         data => this.futureSpends = data,
        //         error => console.error(error)
        //     );
        this.futureSpends = Math.random() * 100;
    }
}
