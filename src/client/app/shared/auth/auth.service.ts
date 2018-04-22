import { Injectable } from '@angular/core';
import { getTestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  storageKey = 'accessToken';

  constructor(private router: Router) { }

  setToken(token: string) {
    localStorage.setItem(this.storageKey, token);
    const time_to_login = Date.now() + 86400000;
    localStorage.setItem('timer', JSON.stringify(time_to_login));
  }

  getToken() {
    return localStorage.getItem(this.storageKey);
  }

  setUserInfo(userinfo) {
    localStorage.setItem('user', userinfo.user);
    localStorage.setItem('userid', userinfo.userid);
  }

  getUsername() {
    return localStorage.getItem('user');
  }

  checkJWT() {
    const timer = JSON.parse(localStorage.getItem('timer'));
    if (timer && (Date.now() > timer)) {
      return true;
    } else {
      return false;
    }
  }

  getUserId() {
    return localStorage.getItem('userid');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    // localStorage.removeItem(this.storageKey);
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
