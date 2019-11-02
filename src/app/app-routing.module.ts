import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'safety-plan', loadChildren: './safety-plan/safety-plan.module#SafetyPlanPageModule' },
  { path: 'resources', loadChildren: './resources/resources.module#ResourcesPageModule' },
  { path: 'info', loadChildren: './info/info.module#InfoPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
