import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // logout() {
  //   throw new Error('Method not implemented.');
  // }

  constructor(private router:Router) { }

  login(uname: string, pword: string){
    if(uname === 'randika' && pword === '1234'){
      return 200;
    } else{
      return 403;
    }
  }

  logout(){
    this.router.navigate(['login'])
  }
}
