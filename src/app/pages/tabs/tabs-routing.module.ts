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
        path: 'accounts',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../accounts/accounts.module').then(m => m.AccountsPageModule)
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
        path: 'analytics',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../analytics/analytics.module').then(m => m.AnalyticsPageModule)
          }
        ]
      },
      {
        path: 'menu',
        children: [
          {
            path: '',
            loadChildren: () => import('../menu/menu.module').then(m => m.MenuPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: Routing.Transactions,
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: Routing.Transactions,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
