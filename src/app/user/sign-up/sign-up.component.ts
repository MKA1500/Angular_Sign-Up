import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../shared/user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user: User;
  submitted = false;
  @ViewChild('userRegistrationForm') signupForm: NgForm;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.signupForm.value);

    // this.submitted = true;

    // this.user.username = this.signupForm.value.userData.username;
    // this.user.email = this.signupForm.value.userData.email;
    // this.user.gender = this.signupForm.value.userData.gender;
    // this.user.secretQuestion = this.signupForm.value.secret;
    // this.user.answer = this.signupForm.value.questionAnswer;

    // this.signupForm.reset();
  }
}
