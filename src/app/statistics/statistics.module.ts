import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from './pages/charts/charts.component';



@NgModule({
  declarations: [
    ChartsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChartsComponent
  ]
})
export class StatisticsModule { }
