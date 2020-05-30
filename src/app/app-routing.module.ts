import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { DiscoverComponent } from './discover/discover.component';
import { BarPagePage } from './bar-page/bar-page.page';


import { ModifBarComponent } from './modif-bar/modif-bar.component';
import { ResultatsComponent } from './resultats/resultats.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'discover', component: DiscoverComponent},
  {path: 'bar-page', component: BarPagePage },
  {path: 'modif', component: ModifBarComponent},
  {path: 'resultats', component: ResultatsComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
