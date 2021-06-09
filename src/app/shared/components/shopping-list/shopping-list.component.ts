import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ListService } from '../../services/list.service';
import { Product, ShopListUser, InfoProduct } from '../../interfaces/shopListResponse';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  @Output() activateModal: EventEmitter<boolean> = new EventEmitter();
  @Output() activateModalQ: EventEmitter<boolean> = new EventEmitter();
  @Output() nameProduct: EventEmitter<InfoProduct> = new EventEmitter();



  list: Partial<ShopListUser> = {};
  existsList = false;
  checkId = '';
  active = false;
  private subscription: Subscription = new Subscription();


  constructor( private listService: ListService) { }


  ngOnInit(): void {

    this.subscription.add(
        this.listService.existList.subscribe( exist => {
            console.log('Lo ejecute');
            this.getShoppinList();

        })
    );
  }


  getShoppinList(): void {

    this.subscription.add(

      this.listService.getList().subscribe( resp => {
          this.list = resp;
          // console.log(this.list);
      })
    );
  }

  updateQuantity( pd: Product ) {
    // console.log(product);

    const { product } = pd;
    this.nameProduct.emit(product);
    this.activateModalQ.emit(true);
    // console.log('From update product');
  }


  showModal() {
    this.activateModal.emit(true);
  }

  controls( id: string ): void {
    this.checkId = id;
    this.active = true;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
