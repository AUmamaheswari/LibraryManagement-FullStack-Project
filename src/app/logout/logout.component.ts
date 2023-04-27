import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
 
  username = '';
  password = '';
  invalidLogout = false;

  constructor(private router: Router,private authenticationService: AuthenticationService) { }
    ngOnInit() {
      this.authenticationService.logout();
      this.router.navigate(['logout']);
    }
    
  


}





  

  
  





