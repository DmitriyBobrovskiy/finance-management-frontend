import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';

import { Transaction } from './models/transaction';

@Injectable({
  providedIn: 'root'
})

export abstract class Transactions {
  transactions: Observable<Transaction[]>;

  abstract get();
}

export class TransactionsService implements Transactions {
  private transactionsStream = new BehaviorSubject(null);
  get transactions() { return this.transactionsStream.asObservable(); }

  constructor(private httpClient: HttpClient) { }

  get() {
    this.httpClient
      .get<Transaction[]>('http://192.168.0.106:63732/api/transactions')
      .subscribe(transactions => {
        this.transactionsStream.next(transactions);
      });
  }
}
