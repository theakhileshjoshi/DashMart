import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  isInputValid:boolean = true;
  user:User = new User();

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {}

  signupForm: FormGroup = this.formBuilder.group({
    name: new FormControl('',[Validators.required]),
    mobileNumber: new FormControl('',[Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });


  onSubmit(){
    if(this.signupForm.status != "VALID")this.isInputValid = false;
    else{
      this.user.email = this.signupForm.value.email;
      this.user.mobileNumber = this.signupForm.value.mobileNumber;
      this.user.name = this.signupForm.value.name;
      this.user.password = this.signupForm.value.password;
      this.userService.registerNewUser(this.user).subscribe(result => {
        this.toastr.success('Please contact admin for enable access.','Registered successfully')
        this.router.navigate(['login'])
      });
    }
    


  }

}
