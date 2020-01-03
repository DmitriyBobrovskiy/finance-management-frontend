import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Transaction } from 'src/app/core/backend/models/transaction';
import { getTransactionTypeInfo } from 'src/app/core/backend/models/transaction-type';
import { TransactionStore } from 'src/app/core/transaction-store';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage implements OnInit {
  transaction: Transaction;

  constructor(
    private router: Router,
    public transactionStore: TransactionStore) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.transaction = this.router.getCurrentNavigation().extras.state.transaction;
    }
  }

  ngOnInit() {
    this.transaction = this.transactionStore.transactions[0];
  }

  save = () => {
    console.log('saving transaction...');
    console.log(this.transaction.amount);
  }

  delete = () => {
    console.log('deleting transaction...');
  }

  get transactionTypeInfo() {
    return getTransactionTypeInfo(this.transaction.transactionTypeId);
  }
}
