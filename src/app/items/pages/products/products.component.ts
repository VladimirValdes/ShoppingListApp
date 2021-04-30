import { Component, OnInit, Output } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { ProdxCatResponse, Result } from '../../interfaces/prodXcatResponse';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productsList: Result[] = [];
  // @Output
  // productsList = [
  //   {
  //     category: 'Fruit and Vegetables',
  //     products: [
  //       {
  //         name: 'Tomate'
  //       },
  //       {
  //         name: 'Avocado'
  //       },
  //       {
  //         name: 'Apple'
  //       },
  //       {
  //         name: 'Watermelon'
  //       },
  //       {
  //         name: 'PineApple'
  //       }
  //     ]

  //   },
  //   {
  //     category: 'Meat and Fish',
  //     products: [
  //       {
  //         name: 'chicken'
  //       },
  //       {
  //         name: 'Pork'
  //       },
  //       {
  //         name: 'Salomon'
  //       },
  //       {
  //         name: 'Fish'
  //       },
  //       {
  //         name: 'Meat'
  //       }
  //     ]

  //   },
  //   {
  //     category: 'Beverages',
  //     products: [
  //       {
  //         name: 'Acocado'
  //       },
  //       {
  //         name: 'Banana'
  //       },
  //       {
  //         name: 'Chicken'
  //       },
  //       {
  //         name: 'Watermelon'
  //       },
  //       {
  //         name: 'Mandarin'
  //       }
  //     ]

  //   }
  // ];

  constructor( private itemService: ItemsService) { }

  ngOnInit(): void {

    this.itemService.getRefresh().subscribe( value  => {

      if (value) {
        this.getItems();
        console.log('Fuck!! You can do it man!!!');
      }
    });

    this.getItems();
    // this.itemService.getArrayProducts();
    // console.log(this.itemService.productos);
    // this.productsList = this.itemService.productos;
    // console.log(this.productsList);
  }

  getItems() {
    this.itemService.getProductsByUser().subscribe( resp => {
      // console.log(resp);
     this.productsList = resp;
    });
  }

}
