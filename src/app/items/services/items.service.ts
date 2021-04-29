import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../auth/services/auth.service';
import { environment } from 'src/environments/environment';
import { ProdxCatResponse, Result } from '../interfaces/prodXcatResponse';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  // /search/categoriesUser
  constructor( private http: HttpClient,
               private authService: AuthService) { }


  getProductsByUser(): Observable<Result[]> {

    const token = this.authService.readToken();

    const headers = new HttpHeaders().set('x-token', token);


    return this.http.get<ProdxCatResponse>(`${ environment.url }/search/productsUser`, {
      headers
    }).pipe(
      map( ( resp ) => resp.results)
    );
  }
}
