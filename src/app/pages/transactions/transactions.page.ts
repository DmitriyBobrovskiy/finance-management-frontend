import { Component, OnInit } from '@angular/core';
import { Transactions } from 'src/app/core/backend/transactions.service';
import { Transaction } from 'src/app/core/backend/models/transaction';

@Component({
  selector: 'app-transactions',
  templateUrl: 'transactions.page.html',
  styleUrls: ['transactions.page.scss']
})
export class TransactionsPage implements OnInit {
  transactions: Transaction[] = [];

  constructor(private transactionsService: Transactions) { }

  ngOnInit() {
    this.transactionsService.transactions
      .subscribe(transactions => this.transactions = transactions);
  }

  sync = () => {
    this.transactionsService.get();
  }
}
