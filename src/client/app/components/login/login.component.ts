import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth/auth.service';
import { GeneralService } from '../../shared/common/general.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private apiService: ApiService, private router: Router,
    private authService: AuthService, private generalService: GeneralService) { }

  login(formFields) {
    console.log(formFields);

    this.apiService.login(formFields).subscribe((result: any) => {
      console.log(result);
      // const response = result.body;
      if (result.message) {
        this.authService.setToken(result.token);
        this.authService.setUserInfo(result);
        // localStorage.setItem('accessToken', result.token);
        this.generalService.username = result.user;
        this.router.navigate(['/dashboard']);
      }
    });
  }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['dashboard']);
    }
  }

}
