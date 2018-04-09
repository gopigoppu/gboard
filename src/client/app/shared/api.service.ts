import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators/catchError';


@Injectable()
export class ApiService {

  private baseUrl = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  login(formFields) {
    return this.post('login', formFields);
  }



  get(url: string) {
    return this.request(url, 'GET');
  }

  post(url: string, body: Object) {
    return this.request(url, 'POST', body);
  }

  put(url: string, body: Object) {
    return this.request(url, 'PUT', body);
  }

  delete(url: string) {
    return this.request(url, 'DELETE');
  }




  request(url: string, method: string, body?: Object) {
    const apiUrl = `${this.baseUrl}/${url}`;
    const httpOptions = new HttpHeaders({
      'Content-Type': 'application/json'
      // 'Authorization': 'my-auth-token'
    });
    const params = new HttpParams();
    // const request = new HttpRequest(method, apiUrl, httpOptions);
    // const requestOptions = request.clone({
    //   body: request.body.replace(null, body);
    // });
    const options: Object = {
      headers: httpOptions,
      observe: 'response', // to display the full response & as 'body' for type cast
      responseType: 'json'
    };
    if (body) {
      options['body'] = body;
      // requestOptions['body'] = body;
    }
    // return this.http.request(method, apiUrl, options);
    return this.http.request(method, apiUrl, options)
      .pipe(
        catchError(this.handleError)
      );
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occured: ', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`
      );

      return new ErrorObservable(
        'Something bad happened; please try again later.'
      );

    }
  }

  // login(userData) {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json'
  //     })
  //   };

  //   return this.http.post(`${this.baseUrl}login`, userData, httpOptions);
  // }

}
