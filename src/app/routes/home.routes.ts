import { Routes } from '@angular/router';
import { ListComponent } from '../history/pages/list/list.component';
import { ProductsComponent } from '../items/pages/products/products.component';
import { ChartsComponent } from '../statistics/pages/charts/charts.component';


export const HOME_ROUTES: Routes = [
    { path: 'products', component: ProductsComponent  },
    { path: 'lists', component: ListComponent },
    { path: 'charts', component: ChartsComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'products' },

];

