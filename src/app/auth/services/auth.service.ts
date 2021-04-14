import { HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';


import { User, UserResponse } from '../interfaces/user-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userToken: string;

  constructor( private http: HttpClient) {
    this.userToken = '';
    this.readToken();
   }

  register( name: string, email: string, password: string): Observable<User> {

    const body = {
      name,
      email,
      password
    };

    return this.http.post<User>(`${ environment.url }/users?`, body);
  }


  login( email: string, password: string ): Observable<UserResponse> {

    const body = {
      email,
      password
    };

    return this.http.post<UserResponse>(`${ environment.url }/auth/login`, body)
                    .pipe(
                      map( ( userResponse: UserResponse ) => {
                        this.saveToken( userResponse.token );
                        return userResponse;
                      })
                    );
  }

  logout() {
    localStorage.removeItem('x-token');
  }

  readToken(): string {

    if ( localStorage.getItem('x-token') ) {
      this.userToken = localStorage.getItem('x-token') || '';
    } else  {
      this.userToken = '';
    }

    return this.userToken;
  }

  isAuthenticate(): boolean {
    this.readToken();
    return this.userToken.length > 2;
  }

  private saveToken( token: string ) {

      this.userToken = token;
      localStorage.setItem('x-token', token );

  }

}
