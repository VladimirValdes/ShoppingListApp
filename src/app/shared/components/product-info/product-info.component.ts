import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { ItemsService } from '../../../items/services/items.service';
import { Product, ProductObj } from '../../../items/interfaces/product-response';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit, OnDestroy {

  @Output() activeInfoProd: EventEmitter<boolean> = new EventEmitter();

  product: Product = new ProductObj();
  pid = '';
  show = false;

  private subscription: Subscription = new Subscription();


  constructor( private itemService: ItemsService) { }

  ngOnInit(): void {

    this.subscription.add(
        this.itemService.getProduct().subscribe( pid => {
          this.show = true;
          this.pid = pid;
          this.getInfoProduct( this.pid );
        })
    );

  }

  back() {
     this.itemService.active.next(false);
  }

  getInfoProduct( pid: string ) {
    this.subscription.add(
        this.itemService.getInfoProd( pid ).subscribe( resp => {

          console.log(resp);
          this.product = resp;
        })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
