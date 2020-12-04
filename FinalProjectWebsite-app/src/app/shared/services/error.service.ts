import { Injectable } from '@angular/core';
import {MyError} from "../models/error";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthenticationService} from "./authentication.service";
import {environment} from "../../../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
}

@Injectable({
  providedIn: 'root'
})

export class ErrorService {

  errors: MyError[];

  constructor(private http: HttpClient, private authenticationservice: AuthenticationService) {
  }

  getErrors(): Observable<MyError[]>{
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationservice.getToken());

    return this.http.get<MyError[]>(environment.apiUrl + '/error', httpOptions);
  }

  getErrorById(id: number): Observable<MyError> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationservice.getToken());

    return this.http.get<MyError>(environment.apiUrl + '/error/' + id, httpOptions);
  }

  deleteError(id: number): Observable<any> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationservice.getToken());

    return this.http.delete(environment.apiUrl + '/error/' +id, httpOptions);
  }
}
