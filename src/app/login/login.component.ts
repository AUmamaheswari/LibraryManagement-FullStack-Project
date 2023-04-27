import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  invalidLogin = false;
  emessage: string | undefined;

  /*Constructor will be called and the reference types router and Authentication Service will be created*/
  constructor(private router: Router, private loginservice: AuthenticationService) { }
  ngOnInit() {

  }
  /*When you click on login-->checkLogin method will be called from this it redirected to authenticate method in the login service
   *If the logged Successfully then it'll navigate to the books router 
   *If inalidlogin is true it will through a emessage as Enter Correct Credentials
   */
  checkLogin() {
    var status = confirm("Logged In Successfully");
    if (status == true) {
      if (this.loginservice.authenticate(this.username, this.password)) {

        this.router.navigate(['books']);
        console.log("navigate..");

        this.invalidLogin = false;
      }
      else {
        this.invalidLogin = true;
        this.emessage = 'Enter Correct Credentials';
      }
    }



  }
}
