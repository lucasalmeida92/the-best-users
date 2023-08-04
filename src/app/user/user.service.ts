import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiURL:string = 'https://dummyapi.io/data/v1';
  private userApiUrl:string = this.apiURL + '/user';
  private apiAppId:string = '64b53aabc898804a50d2af57';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'app-id': this.apiAppId,
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    // Pagination params: ?page=1&limit=10
    return this.httpClient.get(this.userApiUrl, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  find(id:string): Observable<any> {
    return this.httpClient.get(`${this.userApiUrl}/${id}`, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  create(user:User): Observable<any> {
    return this.httpClient.post(`${this.userApiUrl}/create`, JSON.stringify(user), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  update(id:string, user:User): Observable<any> {
    return this.httpClient.put(`${this.userApiUrl}/${id}`, JSON.stringify(user), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  delete(id:string){
    return this.httpClient.delete(`${this.userApiUrl}/${id}`, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  errorHandler(error:any) {
    let errorMessage = '';

    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
