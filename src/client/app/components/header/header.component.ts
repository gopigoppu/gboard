import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth/auth.service';
import { GeneralService } from '../../shared/common/general.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  username: any;

  constructor(private authService: AuthService, private generalService: GeneralService) { }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {
    this.generalService.userNameValue.subscribe((value) => {
      this.username = value;
    });
  }


}
