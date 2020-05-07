import { Injectable } from '@angular/core';
import { Personas } from '../classes/personas';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  endpoint: string = 'apidb';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  public users : Personas[];

  constructor(private http: HttpClient) { }

//Add User
public addUser(data: Personas): Observable<any> {
  let API_URL = `${this.endpoint}/users/`;
  let user = this.http.post(API_URL, data, {headers: this.headers})
  return user
    .pipe(
      catchError(this.errorMgmt)
    )
}

  // Update user
  public updateUser(_id: string, data:Personas): Observable<any> {
    let API_URL = `${this.endpoint}/users/${_id}`;
    let apiUser = this.http.put(API_URL, data, { headers: this.headers });
    return apiUser.pipe(
      catchError(this.errorMgmt)
    )      
  }

  // Get all users
  public getUsers() {
    let API_URL = this.http.get(`${this.endpoint}/users`, {headers: this.headers});
    return API_URL.pipe(
      catchError(this.errorMgmt)
    );    
  }

  // Get user
  public getUser(_id: string): Observable<any> {
    let API_URL =  `${this.endpoint}/users/${_id}`;
    let apiUser = this.http.get(API_URL, { headers: this.headers });
    return apiUser.pipe(
      catchError(this.errorMgmt)
    )    
  }

  // Delete user
  public deleteUser(_id:string): Observable<any> {
    var API_URL = `${this.endpoint}/users/${_id}`;
    return this.http.delete(API_URL).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Error handling 
  public errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}