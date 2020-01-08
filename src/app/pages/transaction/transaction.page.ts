import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { TypeaheadMatch } from 'ngx-bootstrap';

import { Transaction } from 'src/app/core/backend/models/transaction';
import { getTransactionTypeInfo } from 'src/app/core/backend/models/transaction-type';
import { TransactionStore } from 'src/app/core/transaction-store';
import { CategoryStore } from 'src/app/core/category-store';
import { Category } from 'src/app/core/backend/models/category';
import { AccountStore } from 'src/app/core/account-store';
import { Account } from 'src/app/core/backend/models/account';
import { CounterpartStore } from 'src/app/core/counterpart-store';
import { Counterpart } from 'src/app/core/backend/models/counterpart';


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage implements OnInit {
  modalRef: BsModalRef;
  transaction: Transaction;
  showCategories = false;
  selected: string;

  constructor(
    private router: Router,
    public transactionStore: TransactionStore,
    public categoryStore: CategoryStore,
    public accountStore: AccountStore,
    public counterpartStore: CounterpartStore,
    private modalService: BsModalService,
    private datePicker: DatePicker) {
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

  toggleCategories = () => {
    this.showCategories = !this.showCategories;
  }

  chooseCategory = (category: Category) => {
    this.transaction.category = category;
    this.toggleCategories();
  }

  openModal = (template: TemplateRef<any>) => {
    this.modalRef = this.modalService.show(template);
  }

  closeModal = () => {
    this.modalRef.hide();
  }

  chooseAccount = (account: Account) => {
    this.transaction.account = account;
    this.transaction.accountId = account.id;
    this.closeModal();
  }

  openDateChooser = () => {
    this.datePicker.show({
      date: this.transaction.date,
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT,
      todayText: 'Today'
    }).then(
      date => this.transaction.date = date,
      error => console.error(error)
    );
  }

  onSelectCounterpart = (event: TypeaheadMatch) => {
    const counterpart: Counterpart = event.item;
    this.transaction.counterpart = counterpart;
    this.transaction.counterpartId = counterpart.id;
  }

  get transactionTypeInfo() {
    return getTransactionTypeInfo(this.transaction.transactionTypeId);
  }

  get counterparts() {
    return this.counterpartStore.counterparts.map(counterpart => counterpart.title);
  }
}
