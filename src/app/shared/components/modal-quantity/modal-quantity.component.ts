/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Component, EventEmitter, Input, OnInit, Output, OnDestroy } from '@angular/core';
import { InfoProduct } from '../../interfaces/shopListResponse';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-quantity',
  templateUrl: './modal-quantity.component.html',
  styleUrls: ['./modal-quantity.component.scss']
})
export class ModalQuantityComponent implements OnInit, OnDestroy {

  @Input() quantityActive: boolean;
  @Input() productName: Partial<InfoProduct> = { };
  @Output() modalActiveChanged: EventEmitter<boolean> = new EventEmitter();

  data = {};
  quantity = 1;
  btndisabled = false;

  constructor( private route: Router) {
    this.quantityActive = false;
    console.log('I am active modal one');
  }


  ngOnInit(): void {
  }

  updateQuantity( value: number) {

    const { name, _id } = this.productName;

    if ( value ===  1 ) {
       this.quantity += 1;
       this.btndisabled = false;
    } else  {
      ( this.quantity === 1 ) ?  this.btndisabled = true : this.quantity -= 1;
    }

    this.data = {
      name,
      _id,
      quantity: this.quantity
    };

  }

  ngOnDestroy(): void {
    console.log(`Esta es la cantidad ${ this.quantity }`);
    console.log('Me destrui modal one');
  }

}
