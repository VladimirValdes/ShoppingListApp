import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';



import { ProductsComponent } from './pages/products/products.component';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PipesModule
  ],
  exports: [
    ProductsComponent
  ]
})
export class ItemsModule { }
