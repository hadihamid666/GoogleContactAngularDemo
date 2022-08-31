import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginRequest } from '../models/LoginRequest';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  loginurl=`https://localhost:44358/api/LoginUser/UserLogin`;

  constructor(private http: HttpClient) { }
  loginusers(data:any){
    const httpOptions = {headers : new HttpHeaders({'Content-Type' : 'application/json'})}
    var request=new LoginRequest();
    request.username=data.email;
    request.password=data.password;
    console.log(request);
    return this.http.post(this.loginurl,request,httpOptions);
  }
}
