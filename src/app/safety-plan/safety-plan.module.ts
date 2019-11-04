import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SafetyPlanPage } from './safety-plan.page';

const routes: Routes = [
  {
    path: '',
    component: SafetyPlanPage
  },
  { path: 'coping-strategies', loadChildren: '../guidedMode/coping-strategies/coping-strategies.module#CopingStrategiesPageModule' }
  // { path: 'reasons-to-live', loadChildren: '../guidedMode/reasons-to-live/reasons-to-live.module#ReasonsToLivePageModule' },
  // { path: 'emergengency-contacts', loadChildren: '../guidedMode/emergengency-contacts/emergengency-contacts.module#EmergengencyContactsPageModule' },
  // { path: 'places-to-go', loadChildren: '../guidedMode/places-to-go/places-to-go.module#PlacesToGoPageModule' },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SafetyPlanPage]
})
export class SafetyPlanPageModule {}
