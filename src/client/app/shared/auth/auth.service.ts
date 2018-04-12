import { Injectable } from '@angular/core';
import { getTestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  storageKey = 'accessToken';

  constructor(private router: Router) { }

  setToken(token: string) {
    localStorage.setItem(this.storageKey, token);
  }

  getToken() {
    return localStorage.getItem(this.storageKey);
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem(this.storageKey);
    this.router.navigate(['/login']);
  }

}
