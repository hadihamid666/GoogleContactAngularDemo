import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserInfo } from '../models/UserInfo';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  geturl = `https://localhost:44358/api/UserRegistration/GetUser`;
  posturl=`https://localhost:44358/api/UserRegistration/AddUser`;
  

  constructor(private http: HttpClient) {}
 
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    phoneNumber: new FormControl('', [Validators.required, Validators.minLength(11)])
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: ''
    });
  }

  getusers() {
    return this.http.get(this.geturl);
  }

  insertUser(usersinfo:any) {
  
    const httpOptions = {headers : new HttpHeaders({'Content-Type' : 'application/json'})}
    var request=new UserInfo();
    request.firstName=usersinfo.fname;
    request.lastName=usersinfo.lname;
    request.email=usersinfo.email;
    request.phoneNumber=usersinfo.phone;
    console.log(request);
    return this.http.post(this.posturl,request,httpOptions);
  }
}
