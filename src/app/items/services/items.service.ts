import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from '../../auth/services/auth.service';
import { ProdxCatResponse, Result } from '../interfaces/prodXcatResponse';
import { Product, ProductResponse } from '../interfaces/product-response';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  public active: Subject<boolean> = new Subject<boolean>();
  private refresh: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private pid: BehaviorSubject<string> = new BehaviorSubject<string>('');




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

  getInfoProd( pid: string ): Observable<Product> {

    return this.http.get<ProductResponse>(`${ environment.url }/products/${ pid }`)
                    .pipe(
                      map( ( resp ) =>  resp.product )
                    );

  }

  getRefresh(): Observable<boolean> {
    return this.refresh.asObservable();
  }

  setRefresh( value: boolean ): void {
    this.refresh.next(value);
  }

  getProductId( pid: string): void {
    this.pid.next(pid);
  }

  getProduct(): Observable< string > {
    return this.pid.asObservable();
  }




}
