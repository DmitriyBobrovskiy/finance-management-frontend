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
