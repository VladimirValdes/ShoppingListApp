import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './shared/pages/home/home.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { RegisterComponent } from './auth/pages/register/register.component';

const ROUTES: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'register'
  }

];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( ROUTES )
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
