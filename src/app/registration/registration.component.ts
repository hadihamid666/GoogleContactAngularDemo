import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';
import { NotificationService } from '../services/notification.service';
// import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  massage:any;
 
  constructor(private userdata:UserDataService, private notificationService:NotificationService) { }

  ngOnInit(): void {
  }

  getuserFormData(data:any){
    // console.warn(data);
    this.userdata.saveusers(data).subscribe((result : any)=>{
      this.massage=result.messsage;
      console.warn(result.messsage);
      this.notificationService.success(this.massage);

    })
  }

  // showSuccess() {
  //   this.toastr.success(this.errmsg);
  // }

}
