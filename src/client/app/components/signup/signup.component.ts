import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../shared/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) {
    this.buildSignupForm();
  }

  private buildSignupForm() {
    this.signupForm = this.formBuilder.group({
      firstname: this.formBuilder.control(null, [Validators.required]),
      lastname: this.formBuilder.control(null),
      username: this.formBuilder.control(null, [Validators.required]),
      password: this.formBuilder.control(null, [Validators.required]),
      matchPassword: this.formBuilder.control(null, [Validators.required]),
      mobileNum: this.formBuilder.control(null, [Validators.required]),
      email: this.formBuilder.control(null, [Validators.required])
    });

  }

  submitSignupForm() {
    console.log(this.signupForm.valid);
    if (this.signupForm.value.password !== this.signupForm.value.matchPassword) {
      return;
    }
    delete this.signupForm.value.matchPassword;
    this.apiService.addUser(this.signupForm.value).subscribe((result: any) => {
      console.log(result);
      this.signupForm.reset();
    });

  }

  ngOnInit() {
  }

}
