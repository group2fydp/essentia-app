import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmergengencyContactsPage } from './emergengency-contacts.page';

const routes: Routes = [
  {
    path: '',
    component: EmergengencyContactsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmergengencyContactsPage]
})
export class EmergengencyContactsPageModule {}
