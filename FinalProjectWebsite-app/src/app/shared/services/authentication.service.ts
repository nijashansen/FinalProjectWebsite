import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public isLoggedIn = false;

  urlApi = 'https://finalprojectwebapi.azurewebsites.net/token';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<boolean>{
      return this.http.post<any>(environment.apiUrl + '/token', {username, password})
        .pipe(map(response => {
          const token = response && response.token;
          if (token) {
            sessionStorage.setItem('currentUser', JSON.stringify({username: username, token: token}));
            return true;
          } else {
            return false;
          }
        }))
  }

  logout(): void{
    sessionStorage.removeItem('currentUser');
    this.isLoggedIn = false;
  }

  getUsername(): string{
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    return currentUser && currentUser.username;
  }

  getToken(): string{
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    return currentUser && currentUser.token;
  }
}
