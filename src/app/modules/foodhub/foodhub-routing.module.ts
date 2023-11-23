import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodHubHome } from './components/home/foodhub-home.component';

const routes: Routes = [
  { path: '', component: FoodHubHome }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodhubRoutingModule { }
