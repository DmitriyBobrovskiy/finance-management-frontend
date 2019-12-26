import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { cloneDeep } from 'lodash';

import { TransactionStore } from 'src/app/core/transaction-store';
import { State } from 'src/app/core/state';
import { Routing } from 'src/app/routing';
import { Transaction } from 'src/app/core/backend/models/transaction';
import {
  TransactionType,
  getTransactionTypeInfo
} from 'src/app/core/backend/models/transaction-type';

@Component({
  selector: 'app-transactions',
  templateUrl: 'transactions.page.html',
  styleUrls: ['transactions.page.scss']
})
export class TransactionsPage implements OnInit {
  State = State;
  TransactionType = TransactionType;

  // TODO: change to enum
  color = 'red';
  direction = 'top';
  open: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    public transactionStore: TransactionStore,
    private router: Router
  ) { }

  ngOnInit() {
  }

  fetch = () => {
    this.transactionStore.fetch();
  }

  edit = (transaction: Transaction) => {
    this.router.navigate(
      [Routing.Transaction],
      { state: { transaction: cloneDeep(transaction) } });
  }

  transactionTypeInfo = (transactionType: TransactionType) => {
    return getTransactionTypeInfo(transactionType);
  }
}
