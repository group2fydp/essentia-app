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
<<<<<<< HEAD
  }
=======
  },

  { 
    path: 'safety-plan', 
    loadChildren: '../../safety-plan/safety-plan.module#SafetyPlanPageModule' 
  },
  { 
    path: 'reasons-to-live', 
    loadChildren: '../reasons-to-live/reasons-to-live.module#ReasonsToLivePageModule' 
  },
>>>>>>> 67284f1d630e3a54d0685719ab541f2a7b9348a8
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
