import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TransactionsPage } from './transactions.page';
import { FloatButtonModule } from 'src/app/shared/float-button/float-button.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: TransactionsPage }]),
    FloatButtonModule,
  ],
  declarations: [TransactionsPage]
})
export class TransactionsPageModule { }
