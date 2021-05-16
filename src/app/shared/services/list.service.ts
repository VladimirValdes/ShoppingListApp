import { Injectable } from '@angular/core';
import { Product } from 'src/app/items/interfaces/prodXcatResponse';
import { ListResponse } from '../interfaces/lista-response';
import Swal  from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class ListService {

   listProducts: ListResponse[] = [];

  constructor() {
    this.loadData();
  }

  addProducts( product: Product, categoryName: string ) {

    const { pid, name, category } = product;

    const prodData = {
      // eslint-disable-next-line no-underscore-dangle
      cid: category,
      category: categoryName,
      products: [{
        pid,
        name,
        cantidad: 1
      }]
    };


    const existCategory = this.listProducts.find( pd => pd.cid === category);

    if ( existCategory ) {

       const existProduct = existCategory.products.find( p => p.pid === pid );


       if (!existProduct) {
         existCategory.products.push({ pid, name, cantidad: 1 });
        } else {

          Swal.fire({
            icon: 'info',
            title: 'Product already exists',
          });
        }


    } else  { this.listProducts.push(prodData); }


    this.updateData();

    console.log(this.listProducts);
  }

  updateData() {
    localStorage.setItem('data', JSON.stringify(this.listProducts));
  }

  loadData() {
    if ( localStorage.getItem('data') ) {
      this.listProducts = JSON.parse(localStorage.getItem('data') || '[]');
    }
  }

}
