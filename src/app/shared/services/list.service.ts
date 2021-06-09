import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { AuthService } from '../../auth/services/auth.service';
import { ListResponse, ShopListResponse, ShopListUser } from '../interfaces/shopListResponse';
import { map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  public existList: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  constructor( private authService: AuthService,
               private http: HttpClient) {
  }

  createList( category: string, product: string ): Observable<string> {

    const headers = new HttpHeaders().set('x-token', this.authService.readToken());

    const data = {
      category,
      product
    };

    // this.existList.next(true);

    return this.http.post<ListResponse>(`${environment.url}/shopList`, data, { headers })
                    .pipe(
                      map( resp => resp.id )
                    );

  }

  getList( ): Observable<ShopListUser> {

    const headers = new HttpHeaders().set('x-token', this.authService.readToken());
    return this.http.get<ShopListResponse>(`${ environment.url }/shopList/list`, { headers })
                    .pipe(
                      map( resp => resp.shopListUser )
                    );
  }



}
