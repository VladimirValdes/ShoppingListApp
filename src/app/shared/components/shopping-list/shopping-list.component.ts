import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ListResponse } from '../../interfaces/lista-response';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  @Output() activateModal: EventEmitter<boolean> = new EventEmitter();


  productos: ListResponse[] = [];

  constructor( private listService: ListService) { }

  ngOnInit(): void {
    this.productos = this.listService.listProducts;
  }


  showModal() {
    this.activateModal.emit(true);
  }

}
