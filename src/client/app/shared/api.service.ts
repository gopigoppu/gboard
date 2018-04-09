import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable()
export class ApiService {

  private baseUrl = environment.baseApiUrl;

  constructor(private http: HttpClient) { }



  // request(url: string, method: string, body?: Object) {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json'
  //     })
  //   };

  //   const requestOptions = new RequestOptions({
  //     url: `${this.baseUrl}${url}`,
  //     method: method,
  //     headers: httpOptions
  //   });

  //   if (body) {
  //     requestOptions.body = body;
  //   }

  //   const request = new Request(requestOptions);

  //   return this.http.request(request);
  // }


  login(userData) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post(`${this.baseUrl}login`, userData, httpOptions);
  }

}
