import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarPagePageRoutingModule } from './bar-page-routing.module';

import { BarPagePage } from './bar-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarPagePageRoutingModule
  ],
  declarations: [BarPagePage]
})
export class BarPagePageModule {}
