import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [HomeComponent, NavbarComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
