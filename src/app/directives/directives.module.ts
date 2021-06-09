import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloseModalDirective } from './close-modal.directive';
import { ShowControlsDirective } from './show-controls.directive';



@NgModule({
  declarations: [
    CloseModalDirective,
    ShowControlsDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CloseModalDirective,
    ShowControlsDirective
  ]
})
export class DirectivesModule { }
