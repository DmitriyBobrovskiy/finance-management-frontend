import { Component, OnInit } from '@angular/core';

import { UserStore } from 'src/app/core/user-store';
import { PredictionStore } from 'src/app/core/prediction-store';

@Component({
  selector: 'app-analytics',
  templateUrl: 'analytics.page.html',
  styleUrls: ['analytics.page.scss']
})
export class AnalyticsPage implements OnInit {
  monthsToAnalyze = 1;
  daysToPredict = 1;

  constructor(
    public userStore: UserStore,
    public predictionStore: PredictionStore
  ) { }

  ngOnInit() {
    this.rangesChanges();
  }

  rangesChanges = () => {
    this.predictionStore.predict(this.monthsToAnalyze, this.daysToPredict);
  }
}
