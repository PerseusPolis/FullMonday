import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

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
            loadChildren: '../tab1/tab1.module#Tab1PageModule'
          }
        ]
      },
      {
        path: 'spotlight',
        children: [
          {
            path: '',
            loadChildren: '../spotlight/spotlight.module#SpotlightPageModule'
          }
        ]
      },
      {
        path: 'mytickets',
        children: [
          {
            path: '',
            loadChildren: '../mytickets/mytickets.module#MyticketsPageModule'
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: '../profile/profile.module#ProfilePageModule'
          }
        ]
      },
      {
        path: 'food',
        children: [
          {
            path: '',
            loadChildren: '../food/food.module#FoodPageModule'
          }
        ]
      },
      {
        path: 'promos',
        children: [
          {
            path: '',
            loadChildren: '../promos/promos.module#PromosPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
