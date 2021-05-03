import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../auth/services/auth.service';
import { environment } from 'src/environments/environment';
import { ProdxCatResponse, Result } from '../interfaces/prodXcatResponse';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';


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
