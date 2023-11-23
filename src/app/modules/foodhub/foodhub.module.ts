import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodhubRoutingModule } from './foodhub-routing.module';
import { FoodHubHome } from './components/home/foodhub-home.component';
import { ViewComponent } from './components/view/view.component';


@NgModule({
  declarations: [
    ViewComponent,
    FoodHubHome
  ],
  imports: [
    CommonModule,
    FoodhubRoutingModule
  ]
})
export class FoodhubModule { }
