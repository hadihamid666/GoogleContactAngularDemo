import { Component, OnInit,ViewChild  } from '@angular/core';
import { UserDataService } from '../services/user-data.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  // users:any;
  listGet:any;
  constructor(private userDataService:UserDataService) { 
   
  }
  ngOnInit(): void {
    this.getuserdata();

  }
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'phoneNumber','isAutherized']

  getuserdata(){
    this.userDataService.getusers().subscribe((data)=>
      {
        this.listGet = data;
        console.log(data);
      })
  }

}
