import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserInfo } from '../models/UserInfo';
@Injectable({
  providedIn: 'root',
})
export class UserDataService {

  geturl = `https://localhost:44358/api/UserRegistration/GetUser`;
  posturl=`https://localhost:44358/api/UserRegistration/AddUser`;
  

  constructor(private http: HttpClient) {}

  getusers() {
    return this.http.get(this.geturl);
  }

  saveusers(data:any){
    const httpOptions = {headers : new HttpHeaders({'Content-Type' : 'application/json'})}
    var request=new UserInfo();
    request.firstName=data.fname;
    request.lastName=data.lname;
    request.email=data.email;
    request.phoneNumber=data.phone;
    console.log(request);
    return this.http.post(this.posturl,request,httpOptions);
  }
}
