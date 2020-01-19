import { Injectable } from '@angular/core';

import { observable, action } from 'mobx-angular';

@Injectable()
export class PredictionStore {
    @observable futureSpends: number;

    @action predict(monthsToAnalyze: number, daysToPredict: number) {
        this.futureSpends = Math.random() * 100;
    }
}
