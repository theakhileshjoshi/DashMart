import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user: any = [];
  curUser: User;
  isInputValid: boolean = true;
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  loginForm: FormGroup = this.formBuilder.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  get email() {
    return this.loginForm.value.email;
  }

  get password() {
    return this.loginForm.value.password;
  }

  onSubmit() {
    if (this.loginForm.status == 'VALID') this.isInputValid = true;
    else this.isInputValid = false;

    this.user = this.userService.getUserData(
      this.loginForm.value.email,
      this.loginForm.value.password
    );
    this.user.subscribe((res: any) => {
      for (let r of res) {
        if (
          r.email == this.loginForm.value.email &&
          r.password == this.loginForm.value.password
        ) {
          this.curUser = r;
          this.curUser.email = r.email;
          sessionStorage.setItem('userEmail', this.curUser.email);
          sessionStorage.setItem('userRole', 'customer');
          this.router.navigate([""]);
        }
      }
    });

    //console.log(this.curUser.email);
  }
}
