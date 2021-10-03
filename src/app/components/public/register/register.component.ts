import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup
  constructor(private fb: FormBuilder, private userService: UserService,private toastr: ToastrService,private router:Router) {

    let FormControls = {

      firstname: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z,'-]+"),
        Validators.minLength(2)

      ]),

      lastname: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z,'-]+"),
        Validators.minLength(2)

      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email

      ]),

      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)

      ]),
      repassword: new FormControl('', [
        Validators.required,

      ])

    }
    this.registerForm = this.fb.group(FormControls);

  }
  get firstname() { return this.registerForm.get('firstname') }
  get lastname() { return this.registerForm.get('lastname') }
  get email() { return this.registerForm.get('email') }
  get password() { return this.registerForm.get('password') }
  get repassword() { return this.registerForm.get('repassword') }

  ngOnInit(): void {
    let isLoggedIn=this.userService.isLoggedIn();
    if(isLoggedIn){
this.router.navigate(['/'])
    }

  }

  register() {
  
    let data = this.registerForm.value;
    let user = new User(data.firstname, data.lastname, data.email, data.password);
    console.log(user)
    this.userService.addUser(user).subscribe(
      res=>{
       this.toastr.success(res.message);
        this.router.navigate(['/login']);

      },
      err=>{

        console.log(err) ;
      }
    )
  }


}
