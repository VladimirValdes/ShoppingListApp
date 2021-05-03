import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ItemsService } from '../../../items/services/items.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {

  @Output() activeInfoProd: EventEmitter<boolean> = new EventEmitter();

  constructor( private itemService: ItemsService) { }

  ngOnInit(): void {
    this.itemService.getProduct().subscribe( pid => {
      console.log('From Show Info Product');
      console.log(pid);
      // this.activeInfoProd.emit(true);
    });
  }

  back() {
     this.itemService.active.next(false);
  }

}
