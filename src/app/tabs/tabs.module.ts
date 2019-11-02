import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'safety-plan',
        children: [
          {
            path: '',
            loadChildren: '../safety-plan/safety-plan.module#SafetyPlanPageModule'
          }
        ]
      },

      {
        path: 'resources',
        children: [
          {
            path: '',
            loadChildren: '../resources/resources.module#ResourcesPageModule'
          }
        ]
      },
      
      {
        path: 'info',
        children: [
          {
            path: '',
            loadChildren: '../info/info.module#InfoPageModule'
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/safety-plan',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
