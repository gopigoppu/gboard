import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  readonly baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  login(userData) {
    return this.http.post(`${this.baseUrl}/login`, userData);
  }

}
