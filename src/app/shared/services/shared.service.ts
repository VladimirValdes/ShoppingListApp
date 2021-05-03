import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { AuthService } from 'src/app/auth/services/auth.service';
import { CategoriesResponse} from '../interfaces/categories-response';
import { ProductResponse } from 'src/app/items/interfaces/product-response';
import { Category, CategoryResponse } from '../interfaces/category-response';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  // token: string;

  constructor( private http: HttpClient,
               private authService: AuthService) {
               }

   getCategoriesByUser(): Observable<Category[]> {

    // const token = this.authService.readToken();

    const headers = new HttpHeaders().set('x-token', this.authService.readToken());


    return this.http.get<CategoriesResponse>(`${ environment.url }/search/categoriesUser`, {
      headers
    }).pipe(
      map( ( resp ) => resp.categories)
    );
  }

  createProduct( data: any): Observable<ProductResponse> {

    const headers = new HttpHeaders().set('x-token', this.authService.readToken());

    return this.http.post<ProductResponse>(`${ environment.url }/products`, data, { headers });
  }


  createCategory( name: string ): Observable<CategoryResponse> {

    const data = {
      name
    };

    const headers = new HttpHeaders().set('x-token', this.authService.readToken());

    return this.http.post<CategoryResponse>(`${ environment.url }/categories`, data, { headers });
  }
}
