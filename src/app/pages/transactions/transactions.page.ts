import { Component, OnInit } from '@angular/core';
import { TransactionStore } from 'src/app/core/transaction-store';
import { State } from 'src/app/core/state';
import { BehaviorSubject } from 'rxjs';
import { NavController } from '@ionic/angular';

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

  constructor(
    public store: TransactionStore,
    private navigation: NavController
  ) { }

  ngOnInit() {
  }

  fetch = () => {
    this.store.fetch();
  }

  clicked = () => {
    this.navigation.navigateForward('transaction');
  }
}
