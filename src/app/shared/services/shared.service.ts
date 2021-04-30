import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { AuthService } from 'src/app/auth/services/auth.service';
import { CategoriesResponse, Category } from '../interfaces/categories-response';
import { ProductResponse } from 'src/app/items/interfaces/product-response';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  token: string;

  constructor( private http: HttpClient,
               private authService: AuthService) {
                 this.token = this.authService.readToken();
               }

   getCategoriesByUser(): Observable<Category[]> {

    // const token = this.authService.readToken();

    const headers = new HttpHeaders().set('x-token', this.token);


    return this.http.get<CategoriesResponse>(`${ environment.url }/search/categoriesUser`, {
      headers
    }).pipe(
      map( ( resp ) => resp.categories)
    );
  }

  createProduct( data: any): Observable<ProductResponse> {

    const headers = new HttpHeaders().set('x-token', this.token);


    // const data = {
    //   name,
    //   category
    // };

    return this.http.post<ProductResponse>(`${ environment.url }/products`, data, { headers });
  }
}
