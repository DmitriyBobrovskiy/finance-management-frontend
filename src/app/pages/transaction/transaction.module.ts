import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { TypeaheadModule } from 'ngx-bootstrap';

import { TransactionPage } from './transaction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: TransactionPage }]),
    TypeaheadModule,
  ],
  declarations: [TransactionPage]
})
export class TransactionPageModule { }
