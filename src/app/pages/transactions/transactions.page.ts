import { Component } from '@angular/core';
import { Transactions } from 'src/app/core/backend/transactions.service';
import { Transaction } from 'src/app/core/backend/models/transaction';

@Component({
  selector: 'app-transactions',
  templateUrl: 'transactions.page.html',
  styleUrls: ['transactions.page.scss']
})
export class TransactionsPage {
  transactions: Transaction[] = [];

  constructor(private transactionsService: Transactions) { }

  sync = () => {
    this.transactionsService.get()
      .subscribe(transactions => {
        this.transactions = transactions;
      });
  }
}
