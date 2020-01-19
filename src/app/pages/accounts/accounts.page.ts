import { Component } from '@angular/core';

import { AccountStore } from 'src/app/core/account-store';

@Component({
  selector: 'app-accounts',
  templateUrl: 'accounts.page.html',
  styleUrls: ['accounts.page.scss']
})
export class AccountsPage {

  constructor(
    public accountStore: AccountStore) { }

}
