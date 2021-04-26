import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ListResponse } from '../../interfaces/lista-response';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  @Output() activateModal: EventEmitter<boolean> = new EventEmitter();


  productos: ListResponse[] = [
    // {
    //   category: 'verduras',
    //   products: [
    //     {
    //       name: 'tomates',
    //       id: '12334545456456456',
    //       cantidad: 10
    //     },
    //     {
    //       name: 'cebollas',
    //       id: '12334545456456456',
    //       cantidad: 10
    //     },
    //     {
    //       name: 'chiles',
    //       id: '12334545456456456',
    //       cantidad: 5
    //     },
    //     {
    //       name: 'pipianes',
    //       id: '12334545456456456',
    //       cantidad: 12
    //     }
    //   ]
    // },
    // {
    //   category: 'frutas',
    //   products: [
    //     {
    //       name: 'manzanas',
    //       id: '12334545456456456',
    //       cantidad: 10
    //     },
    //     {
    //       name: 'peras',
    //       id: '12334545456456456',
    //       cantidad: 10
    //     },
    //     {
    //       name: 'mandarinas',
    //       id: '12334545456456456',
    //       cantidad: 5
    //     },
    //     {
    //       name: 'uvas',
    //       id: '12334545456456456',
    //       cantidad: 12
    //     }
    //   ]
    // },
    // {
    //   category: 'cereales',
    //   products: [
    //     {
    //       name: 'chocoShrispy',
    //       id: '12334545456456456',
    //       cantidad: 10
    //     },
    //     {
    //       name: 'ojuelas',
    //       id: '12334545456456456',
    //       cantidad: 10
    //     },
    //     {
    //       name: 'sucaritas',
    //       id: '12334545456456456',
    //       cantidad: 5
    //     },
    //     {
    //       name: 'revolturas',
    //       id: '12334545456456456',
    //       cantidad: 12
    //     }
    //   ]
    // }

  ];

  constructor() { }

  ngOnInit(): void {
  }


  showModal() {
    this.activateModal.emit(true);
  }

}
