import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appCloseModal]'
})
export class CloseModalDirective {

  @Output() active: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  @HostListener('click', ['$event'])
   public onClick( event: any ): void {

      if (event.target !== event.currentTarget) { return; }

      this.active.emit(false);

   }

}
