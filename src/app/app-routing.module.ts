import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { BarPagePage } from './bar-page/bar-page.page';


import { ModifBarComponent } from './modif-bar/modif-bar.component';
import { DiscoverComponent } from './discover/discover.component';
import { ResultatsComponent } from './resultats/resultats.component';
import { BarSiraniPubComponent } from './bar-sirani-pub/bar-sirani-pub.component';
import { BarChillusComponent } from './bar-chillus/bar-chillus.component';
import { BarJclubComponent } from './bar-jclub/bar-jclub.component';
import { ResultatsBudweissComponent } from './resultats-budweiss/resultats-budweiss.component';
import { MapComponent } from './map/map.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'discover', component: DiscoverComponent},
  {path: 'bar-page', component: BarPagePage },
  {path: 'modif', component: ModifBarComponent },
  {path: 'resultats', component: ResultatsComponent},
  {path: 'siraniPub', component: BarSiraniPubComponent},
  {path: 'chillus', component: BarChillusComponent},
  {path: 'jclub', component: BarJclubComponent},
  {path: 'budweiss', component: ResultatsBudweissComponent},
  {path: 'map', component: MapComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
