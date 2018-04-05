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

    this.apiService.login(formFields).subscribe((data: any) => {
      console.log(data);
      if (data === 'success') {
        this.router.navigate(['/dashboard']);
      }
    });
  }

  ngOnInit() {
  }

}
