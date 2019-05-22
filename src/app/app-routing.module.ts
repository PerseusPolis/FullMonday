import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'spotlight', loadChildren: './spotlight/spotlight.module#SpotlightPageModule' },
  { path: 'mytickets', loadChildren: './mytickets/mytickets.module#MyticketsPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'food', loadChildren: './food/food.module#FoodPageModule' },
  { path: 'promos', loadChildren: './promos/promos.module#PromosPageModule' },
  // { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'movie-detail/:id', loadChildren: './pages/movie-detail/movie-detail.module#MovieDetailPageModule'},
  { path: 'person-detail/:id', loadChildren: './pages/person-detail/person-detail.module#PersonDetailPageModule' },
  { path: 'search', loadChildren: './pages/search/search.module#SearchPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
