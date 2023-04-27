import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//App component is the head component to the all the components present in any angular project.
export class AppComponent implements OnInit{
 
  title = 'LibraryManagement';
    
  /*Constructor will be called and the reference types AuthenticationService and Router will be created*/
   constructor(public loginService:AuthenticationService,private router:Router) { }
  ngOnInit() {}
  
  /*this method will be called once you click on logout and it'll navigate to the login component.
  Orelse it will navigate to the booklist*/
  confirmLogout(){
    var status= confirm("Do you want to logout?");
    if (status==true) {
    this.router.navigate(['logout']);
    }
    else{
    this.router.navigate(['books']);
}
}
}
