import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/core/backend/models/transaction';
import { Router } from '@angular/router';
import { getTransactionTypeInfo } from 'src/app/core/backend/models/transaction-type';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage implements OnInit {
  transaction: Transaction;

  constructor(
    private router: Router) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.transaction = this.router.getCurrentNavigation().extras.state.transaction;
    }
  }

  ngOnInit() {
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
