import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { DiscoverComponent } from './discover/discover.component';
<<<<<<< HEAD
import { BarPagePage } from './bar-page/bar-page.page';


=======
import { ModifBarComponent } from './modif-bar/modif-bar.component';
>>>>>>> cc1729f97676064f4006e5b07895d16c79ac1311

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'discover', component: DiscoverComponent},
<<<<<<< HEAD
  {path: 'bar-page', component: BarPagePage },
=======
  {path: 'modif', component: ModifBarComponent},
>>>>>>> cc1729f97676064f4006e5b07895d16c79ac1311
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
