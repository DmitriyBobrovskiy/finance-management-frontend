import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { Routing } from 'src/app/routing';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'transactions',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../transactions/transactions.module')
                .then(m => m.TransactionsPageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/transactions',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: Routing.Transaction,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../transaction/transaction.module').then(m => m.TransactionPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/transactions',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
