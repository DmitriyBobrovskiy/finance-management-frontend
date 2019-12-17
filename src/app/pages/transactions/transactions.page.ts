import { Component, OnInit } from '@angular/core';
import { TransactionStore } from 'src/app/core/transaction-store';
import { State } from 'src/app/core/state';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-transactions',
  templateUrl: 'transactions.page.html',
  styleUrls: ['transactions.page.scss']
})
export class TransactionsPage implements OnInit {
  State = State;
  color = 'red';
  direction = 'top';
  open: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(public store: TransactionStore) { }

  ngOnInit() {
  }

  fetch = () => {
    this.store.fetch();
  }

  output(log) {
    console.log(log);
  }
}
