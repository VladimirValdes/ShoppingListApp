import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalLettersPipe } from './capital-letters.pipe';



@NgModule({
  declarations: [
    CapitalLettersPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CapitalLettersPipe
  ]
})
export class PipesModule { }
