import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidControlPipe } from './valid-control.pipe';



@NgModule({
  declarations: [
    ValidControlPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ValidControlPipe
  ]
})
export class PipesModule { }
