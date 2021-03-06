import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import { User } from '../@objects/user';
import 'rxjs/add/operator/map';
@Injectable()
export class AuthService {

  constructor(public http: Http) { }

  authenticateUser(user:User){
    return this.http.post(environment.api + 'login',user).map(res => res.json());
  }
  forgotpassword(user:User){
    return this.http.post(environment.api + 'forgotpassword',user).map(res => res.json());
  }
  register(user:User){
    return this.http.post(environment.api + 'register',user).map(res => res.json());
  }
  verify(username,token){
    console.log(username);
    console.log(token);
    var x ={
      username:username,
      token:token
    };
    return this.http.post(environment.api + 'verify',x).map(res => res.json());

  }

}