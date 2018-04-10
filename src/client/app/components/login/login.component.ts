import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private apiService: ApiService, private router: Router) { }

  login(formFields) {
    console.log(formFields);

    this.apiService.login(formFields).subscribe((result: any) => {
      console.log(result);
      const response = result.body;
      if (response.message) {
        localStorage.setItem('accessToken', response.token);
        this.router.navigate(['/dashboard']);
      }
    });
  }

  ngOnInit() {
  }

}
