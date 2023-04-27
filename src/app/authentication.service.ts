import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

/*Authentication Service is created to have methods to check for valid login and logout*/
export class AuthenticationService {

  constructor() {}
/*this method will check the credential given by the user is correct or not.
 * If it matched then the user can login and it will return true otherwise 
 * it will return false.Once the user logged in the username will be stored 
 * in the session storage.After logout the username will be removed from the 
 * session storage*/
  authenticate(username:any,password:any) {
    if (username ==="Uma" && password ==="abi@1802") { 
      sessionStorage.setItem('username', username) 
      return true;
    } 
    else {
       return false;
    }
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username') 
    console.log(!(user === null))
    return !(user === null)
    }
    logout() 
    { 
      sessionStorage.removeItem('username')
    }

}
