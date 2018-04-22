import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class GeneralService {
  userNameValue = new BehaviorSubject(localStorage.getItem('user'));

  constructor() { }

  set username(value) {
    this.userNameValue.next(value);
    // localStorage.setItem('user', value);
  }

  get username() {
    return localStorage.getItem('user');
  }

}
