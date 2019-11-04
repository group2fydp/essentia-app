import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CopingStrategiesPage } from './coping-strategies.page';

const routes: Routes = [
  {
    path: '',
    component: CopingStrategiesPage
  },

  { 
    path: 'safety-plan', 
    loadChildren: '../../safety-plan/safety-plan.module#SafetyPlanPageModule' 
  },
  { 
    path: 'reasons-to-live', 
    loadChildren: '../reasons-to-live/reasons-to-live.module#ReasonsToLivePageModule' 
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CopingStrategiesPage]
})
export class CopingStrategiesPageModule {}
