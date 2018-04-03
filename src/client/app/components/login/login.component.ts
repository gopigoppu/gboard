import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  login(formFields) {
    console.log(formFields);
  }

  ngOnInit() {
  }

}
