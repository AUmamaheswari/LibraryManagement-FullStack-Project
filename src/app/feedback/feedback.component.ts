import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  username = '';
  email = '';
  subject = '';
  message = '';

  constructor(public loginService:AuthenticationService ,
    private router: Router ) { }  
  
  
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  submit() {

    if (this.username === '' || this.email === '' || this.subject=== '' || this.message=== '') {
      var status = confirm("It is mandatory to fill all the fields");
    }
    else {
      var status = confirm("Your Feedback has been Submitted Successfully");
      if (status == true) {
        this.router.navigate(['home']);
         }
         

  }}
}