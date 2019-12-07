import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Transaction } from './models/transaction';

@Injectable({
  providedIn: 'root'
})

export abstract class Transactions {
  abstract get(): Observable<Transaction[]>;
}

export class TransactionsService implements Transactions {

  constructor(private httpClient: HttpClient) { }

  get(): Observable<Transaction[]> {
    return this.httpClient
      .get<Transaction[]>('http://192.168.0.106:63732/api/transactions');
  }
}
