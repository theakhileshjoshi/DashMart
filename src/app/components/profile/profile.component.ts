import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  users:any;
  curUser: User;

  constructor(private userService:UserService){
    this.users= userService.getUserData(userService.curUseremail,userService.curUserPass);
    this.users.subscribe((res: any) => {
      for (let r of res) {
          this.curUser = r;
          this.curUser.email = r.email;
          this.curUser.mobileNumber = r.mobileNumber;
          this.curUser.name = r.name;
          this.curUser.userName = r.userName;
      }
    });  }
}
