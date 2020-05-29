import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarPagePage } from './bar-page.page';

const routes: Routes = [
  {
    path: '',
    component: BarPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarPagePageRoutingModule {}
