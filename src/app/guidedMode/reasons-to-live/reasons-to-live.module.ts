import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReasonsToLivePage } from './reasons-to-live.page';

const routes: Routes = [
  {
    path: '',
    component: ReasonsToLivePage
  },

  { 
    path: 'emergengency-contacts', 
    loadChildren: '../emergengency-contacts/emergengency-contacts.module#EmergengencyContactsPageModule' 
  },
  { 
    path: 'safety-plan', 
    loadChildren: '../../safety-plan/safety-plan.module#SafetyPlanPageModule' 
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReasonsToLivePage]
})
export class ReasonsToLivePageModule {}
