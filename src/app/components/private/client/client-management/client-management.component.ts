import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-client-management',
  templateUrl: './client-management.component.html',
  styleUrls: ['./client-management.component.css']
})
export class ClientManagementComponent implements OnInit {
  public users: any[] = [];
  constructor(private userService:UserService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.userService.allUser().subscribe(
      res=>{
      this.users=res;
      },
      err=>{
        console.log(err);
      }
    )
  }
  delete(user:User){

    let index = this.users.indexOf(user);
    this.users.splice(index, 1);

    this.userService.deleteUser(user.id).subscribe(
      res => {
        console.log(res);

      },
      err => {
        console.log(err);
      }
    )

  }


  updateUser(user:User){
    user.accountState=!user.accountState;
    this.userService.updateUser(user).subscribe(
      res=>{
console.log(res);
      },
      err=>{
        console.log(err);
      }
    )
    

}
}
