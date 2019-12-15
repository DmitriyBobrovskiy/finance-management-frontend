import { Component, OnInit } from '@angular/core';
import { TransactionStore } from 'src/app/core/transaction-store';
import { State } from 'src/app/core/state';

@Component({
  selector: 'app-transactions',
  templateUrl: 'transactions.page.html',
  styleUrls: ['transactions.page.scss']
})
export class TransactionsPage implements OnInit {
  State = State;
  constructor(public store: TransactionStore) { }

  ngOnInit() {
  }

  fetch = () => {
    this.store.fetch();
  }
}
