import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { NewItemComponent } from './components/new-item/new-item.component';
import { ModalComponent } from './components/modal/modal.component';

// external Modules
import { HistoryModule } from '../history/history.module';
import { ItemsModule } from '../items/items.module';
import { StatisticsModule } from '../statistics/statistics.module';
import { DirectivesModule } from '../directives/directives.module';
import { PipesModule } from '../pipes/pipes.module';
import { ModalQuantityComponent } from './components/modal-quantity/modal-quantity.component';



@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    ProductInfoComponent,
    ShoppingListComponent,
    NewItemComponent,
    ModalComponent,
    ModalQuantityComponent],
  imports: [
    CommonModule,
    HistoryModule,
    ItemsModule,
    StatisticsModule,
    RouterModule,
    DirectivesModule,
    ReactiveFormsModule,
    HttpClientModule,
    PipesModule
  ],
  exports: [
  ]
})
export class SharedModule { }
