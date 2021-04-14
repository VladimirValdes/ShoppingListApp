import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './shared/pages/home/home.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { RegisterComponent } from './auth/pages/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { IsAuthenticatedGuard } from './guards/is-authenticated.guard';

const ROUTES: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [ IsAuthenticatedGuard ]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [ IsAuthenticatedGuard ]


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
