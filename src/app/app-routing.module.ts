import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { CreatePlanComponent } from './create-plan/create-plan.component';
import { NgModule } from '@angular/core';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'create-plan', component: CreatePlanComponent },
  { path: 'about', component: AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
