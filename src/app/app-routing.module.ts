import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'safety-plan', loadChildren: './safety-plan/safety-plan.module#SafetyPlanPageModule' },
  { path: 'resources', loadChildren: './resources/resources.module#ResourcesPageModule' },
  { path: 'info', loadChildren: './info/info.module#InfoPageModule' },
  // { path: 'coping-strategies', loadChildren: '../guidedMode/coping-strategies/coping-strategies.module#CopingStrategiesPageModule' },
  // { path: 'reasons-to-live', loadChildren: './guidedMode/reasons-to-live/reasons-to-live.module#ReasonsToLivePageModule' },
  // { path: 'emergengency-contacts', loadChildren: './guidedMode/emergengency-contacts/emergengency-contacts.module#EmergengencyContactsPageModule' },
  // { path: 'places-to-go', loadChildren: './guidedMode/places-to-go/places-to-go.module#PlacesToGoPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
