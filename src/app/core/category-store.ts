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
        // TODO: for debug reasons only
        this.categories = [
            {
                id: 1,
                title: 'Животные',
                icon: {
                    tag: 'fas fa-dog'
                }
            },
            {
                id: 2,
                title: 'Свободные',
                icon: {
                    tag: 'fas fa-money-bill-wave'
                }
            },
            {
                id: 3,
                title: 'Продукты',
                icon: {
                    tag: 'fas fa-shopping-basket'
                }
            },
            {
                id: 4,
                title: 'Здоровье',
                icon: {
                    tag: 'fas fa-medkit'
                }
            },
            {
                id: 5,
                title: 'Дети',
                icon: {
                    tag: 'fas fa-child'
                }
            },
            {
                id: 6,
                title: 'Автомобиль',
                icon: {
                    tag: 'fas fa-car'
                }
            }
        ];
        // this.fetch();
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
