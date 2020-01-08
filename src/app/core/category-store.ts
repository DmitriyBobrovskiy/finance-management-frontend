import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { observable, action } from 'mobx-angular';
import { timeout } from 'rxjs/operators';

import { Category } from './backend/models/category';
import { Configuration } from '../app.config';

@Injectable()
export class CategoryStore {
    @observable categories: Category[] = [];

    constructor(
        private httpClient: HttpClient,
        private configuration: Configuration) {
        this.fetch();
    }

    @action fetch() {
        this.httpClient
            .get<Category[]>(this.configuration.paths.categories)
            .pipe(timeout(this.configuration.timeouts.loading))
            .subscribe(
                categories => this.categories = categories,
                error => console.error(error)
            );
    }
}
