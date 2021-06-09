import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { Result, Product } from '../../interfaces/prodXcatResponse';
import { ItemsService } from '../../services/items.service';
import { ListService } from '../../../shared/services/list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  @Output() activeProdInf: EventEmitter<boolean> = new EventEmitter();

  productsList: Result[] = [];
  private subscription: Subscription = new Subscription();


  constructor( private itemService: ItemsService,
               private listService: ListService) {
    this.activeProdInf.emit(false);
  }

  ngOnInit(): void {

    this.subscription.add(
        this.itemService.getRefresh().subscribe( value  => {

          if (value) {
            this.getItems();
            console.log('Fuck!! You can do it man!!!');
          }
        })
    );

    this.getItems();

  }

  getItems() {

    this.subscription.add(
        this.itemService.getProductsByUser().subscribe( resp => {
          // console.log(resp);
        this.productsList = resp;
        })
    );
  }

  getProduct( product: any ) {
    console.log(product);
    this.itemService.active.next(true);
    this.itemService.getProductId(product);
  }

  addProductList( prod: Product ) {
     const { pid, category } = prod;

    this.subscription.add(
        this.listService.createList( category, pid).subscribe( resp => {
            this.listService.existList.next(true);
            Swal.fire({
              icon: 'success',
              title: 'Product Added',
              showConfirmButton: false,
              timer: 1500
            });
        }, ( err ) => {
            Swal.fire({
              icon: 'error',
              title: 'Something went wrong',
              text: err.error.msg
            });
        })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
