import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  massage:any;
  constructor(private login:LoginService,
             private notificationService:NotificationService,
             public router: Router
             ) { }

  ngOnInit(): void {
  }

  getuserLoginFormData(data:any){
    console.warn(data);
    this.login.loginusers(data).subscribe((result : any)=>{
      this.massage=result.messsage;

      if (result.isSuccess) {
        this.router.navigate(['/getuser']);
      } else {
        this.notificationService.success(result.messsage);
      }
      console.warn(result.messsage);
      this.notificationService.success(this.massage);

    })
  }

}
