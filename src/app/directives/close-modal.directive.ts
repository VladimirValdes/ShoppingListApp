import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { InfoProduct } from '../shared/interfaces/shopListResponse';

@Directive({
  selector: '[appCloseModal]'
})
export class CloseModalDirective {

  @Input() product = { };

  @Output() active: EventEmitter<boolean> = new EventEmitter();
  @Input() changeQuantity = false;


  constructor() { }

  @HostListener('click', ['$event'])
   public onClick( event: any ): void {

      if (event.target !== event.currentTarget) { return; }

      if ( this.changeQuantity ) { console.log( this.product );}


      this.active.emit(false);

   }

}
