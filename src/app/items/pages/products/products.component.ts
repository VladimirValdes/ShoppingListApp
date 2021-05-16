import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { Result, Product } from '../../interfaces/prodXcatResponse';
import { Router } from '@angular/router';
import { ListService } from '../../../shared/services/list.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @Output() activeProdInf: EventEmitter<boolean> = new EventEmitter();

  productsList: Result[] = [];

  constructor( private itemService: ItemsService,
               private listService: ListService,
               private router: Router) {
    this.activeProdInf.emit(false);
  }

  ngOnInit(): void {

    this.itemService.getRefresh().subscribe( value  => {

      if (value) {
        this.getItems();
        console.log('Fuck!! You can do it man!!!');
      }
    });

    this.getItems();

  }

  getItems() {
    this.itemService.getProductsByUser().subscribe( resp => {
      // console.log(resp);
     this.productsList = resp;
    });
  }

  getProduct( product: any ) {
    console.log(product);
    this.itemService.active.next(true);
    this.itemService.getProductId(product);
  }

  addProduct( prod: Product, category: string ) {
    // console.log('FROM ADD PROUCT FUCK 👌');
    // console.log(prod);
    // console.log(category);

    this.listService.addProducts( prod, category );
  }

}
