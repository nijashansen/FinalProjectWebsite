import { Injectable } from '@angular/core';
import {MyError} from "../models/error";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {MyProcess} from "../models/process";
import {environment} from "../../../environments/environment";
import {AuthenticationService} from "./authentication.service";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProcessService {

  processes: MyProcess[];

  constructor(private http: HttpClient, private authenticationservice: AuthenticationService) {
  }

  getProcesses(): Observable<MyProcess[]>{
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationservice.getToken());

    return this.http.get<MyProcess[]>(environment.apiUrl + '/process', httpOptions);
  }

  getProcessById(id: number): Observable<MyProcess> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationservice.getToken());

    return this.http.get<MyProcess>(environment.apiUrl + '/process' + '/' + id, httpOptions);
  }

  deleteProcess(id: number): Observable<any> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationservice.getToken());

    return this.http.delete(environment.apiUrl + '/process' + '/' +id, httpOptions);
  }
}
