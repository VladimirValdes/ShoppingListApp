import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appShowControls]'
})
export class ShowControlsDirective {

  @Output() active: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  @HostListener('click', ['$event'])
   public onClick( event: any ): void {

      if (event.target !== event.currentTarget) { return; }

      this.active.emit(true);

   }
}
