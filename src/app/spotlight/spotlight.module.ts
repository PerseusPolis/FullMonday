import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SpotlightPage } from './spotlight.page';

import { MoviecardautoComponent} from '../components/moviecardauto/moviecardauto.component';
import {ComponentsModule} from '../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: SpotlightPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [SpotlightPage]
})
export class SpotlightPageModule {}
