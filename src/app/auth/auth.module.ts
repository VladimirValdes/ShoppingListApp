import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PipesModule,
    RouterModule,
    HttpClientModule
  ]
})
export class AuthModule { }
