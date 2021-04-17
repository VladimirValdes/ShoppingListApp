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
  google: string;

  constructor( private http: HttpClient) {
    this.userToken = '';
    this.google = '';
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


   googleSingIn( idToken: string ): Observable<UserResponse> {

    const body = {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      id_token: idToken
    };

    return this.http.post<UserResponse>(`${ environment.url }/auth/google`, body)
                    .pipe(
                      map( ( userResponse: UserResponse ) => {
                        this.saveToken( userResponse.token, 'true' );
                        return userResponse;
                      })
                    );

  }

  logout() {
    this.google = localStorage.getItem('x-google') || 'false';

    if ( this.google === 'true') {
      console.log('from google SigOut');
      localStorage.removeItem('x-token');
      this.googleSigOut();
    } else  {
      console.log('from LogOut');
      localStorage.removeItem('x-token');

    }

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


  private saveToken( token: string, google = 'false' ) {

      this.userToken = token;
      localStorage.setItem('x-token', token );
      localStorage.setItem('x-google', google );

  }

  private googleSigOut(){
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then( () => {
      console.log('User signed out.');
    });
  }

}
