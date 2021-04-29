import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { AuthService } from 'src/app/auth/services/auth.service';
import { CategoriesResponse, Category } from '../interfaces/categories-response';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor( private http: HttpClient,
               private authService: AuthService) { }

   getCategoriesByUser(): Observable<Category[]> {

    const token = this.authService.readToken();

    const headers = new HttpHeaders().set('x-token', token);


    return this.http.get<CategoriesResponse>(`${ environment.url }/search/categoriesUser`, {
      headers
    }).pipe(
      map( ( resp ) => resp.categories)
    );
  }
}
