import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';

const routes: Routes = [
  { path: 'dashboard',
  // tslint:disable-next-line: object-literal-sort-keys
  component: PagesComponent,
  children: [
   { path: '', component: DashboardComponent },
   { path: 'progress', component: ProgressComponent },
   { path: 'grafica1', component: Grafica1Component },
   { path: 'account-settings', component: AccountSettingsComponent },
  ],
 },
];

@NgModule ({
  imports: [RouterModule.forChild(routes)],
  // tslint:disable-next-line: object-literal-sort-keys
  exports: [RouterModule],
})

export class PagesRoutingModule {}
