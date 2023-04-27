import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  username = '';
  email = '';
  password = '';
  repeat_password = '';
  
  
  
  constructor(public loginService:AuthenticationService ,
    private router: Router ) { }
  ngOnInit(){
  }
 

  confirmRegister() {

    if (this.username === '' || this.email === '' || this.password === '' || this.repeat_password === '') {
      var status = confirm("It is mandatory to fill all the fields");
    }
    else {
      var status = confirm("Registered Successfully");

      if (status == true) {
        this.router.navigate(['login']);
         
       }
  }
}
}
