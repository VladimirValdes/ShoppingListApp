import { HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { UserResponse } from '../interfaces/user-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  constructor( private http: HttpClient) { }

  register( name: string, email: string, password: string): Observable<UserResponse> {

    const body = {
      name,
      email,
      password
    };

    return this.http.post<UserResponse>(`${ environment.url }/users?`, body);
  }
}
