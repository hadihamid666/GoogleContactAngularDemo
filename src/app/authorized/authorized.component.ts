import { Component, OnInit } from '@angular/core';
import { UserAuthorizationService } from '../services/user-authorization.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-authorized',
  templateUrl: './authorized.component.html',
  styleUrls: ['./authorized.component.css']
})
export class AuthorizedComponent implements OnInit {

  //formId = 'autherization';
  //form!: FormGroup;
  subscription !: Subscription;
  approveSub   !: Subscription;
  fetch_data    : any;
  // submitObj = {};
  toastr       !: ToastrService

  dataSource =  new MatTableDataSource();

  constructor(private userdata:UserAuthorizationService,private fb: FormBuilder) { }

  ngOnInit(): void {

    // this.form = this.fb.group({
    //   id            : [],
    //   isAuthorized  : ['']
    // });

    this.getAuthorizationData();
    
  }

  displayedColumns = [
    'firstName',
    'lastName',
    'email',
    'phoneNumber',
    'password',
    'isAuthorized',
    'action'
  ];
  

  onAuthorized(value:string, element: any) {  
    element.isAuthorized = value;
    console.log('hadi',element);
            
   this.approveSub = this.userdata.saveauthorization(element).subscribe((res: any)=> {
    if (res.isSuccess) {
      this.toastr?.show("Succuessfully Authorized!")
        //alert('Successfully Athorized!');
        this.getAuthorizationData();
      } else {
        this.toastr?.warning("Authorization Failed!");
        //alert('Successfully Error!');
      }
    })
}

getAuthorizationData(){
  this.subscription =this.userdata.getauthorization().subscribe((getData) => {

      this.fetch_data = getData;
      this.dataSource.data = this.fetch_data;        
    
  });
}

ngOnDestroy() {
  if (this.subscription) {
    this.subscription.unsubscribe();
  }
}

  
}
