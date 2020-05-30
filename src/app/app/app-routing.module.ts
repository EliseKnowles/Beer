import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { DiscoverComponent } from './discover/discover.component';
import { MapComponent } from './map/map.component';
import { ModifBarComponent } from './modif-bar/modif-bar.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'discover', component: DiscoverComponent},
  {path: 'map', component: MapComponent},
  {path: 'modif', component: ModifBarComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
