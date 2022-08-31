import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthorizedUserRequest } from '../models/AuthorizedUserRequest';

@Injectable({
  providedIn: 'root'
})
export class UserAuthorizationService {

  getauthorizationurl=`https://localhost:44358/api/AuthorizationRequest/AuthorizationRequestList`;
  postauthorizationurl=`https://localhost:44358/api/AuthorizationRequest/AuthorizedUser`;
  
  constructor(private http: HttpClient) { }

  getauthorization(){
    return this.http.get(this.getauthorizationurl);
  }

  saveauthorization(authdata:any){
    const httpOptions = {headers : new HttpHeaders({'Content-Type' : 'application/json'})}
    var authrequest=new AuthorizedUserRequest();
    authrequest.id=authdata.id;
    return this.http.post(this.postauthorizationurl,authdata,httpOptions);
  }


}
