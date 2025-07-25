import { Component, NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule  } from '@angular/common/http';
import { environment } from '../baseUrl';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { APIService } from '../api.service';
import { LoginRequired, registerUser,RoleEnum } from '../model/LoginRequired';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], // Fix here
})

export class LoginComponent  {
// export class LoginComponent implements DoCheck {
  url = `${environment.baseUrl}/api/auth/register`;
  loginUrl = `${environment.baseUrl}/User/LogIn`;
  isActive: boolean = false;
  data: any = {};
  error: string = '';
  username: string = '';
  role: number = 0;
  password: string = '';
  loginUserName:string="";
  loginuserPassword:string="";
  
  constructor(private http: HttpClient,private router:Router ,private notify: ToastrService,private api:APIService

  ) {}
  // constructor(private http: HttpClient,private nofify: MatSnackBar) {}  // THIS is also notyification
  addUser() {
    
    const user :registerUser= { // Create a payload object
      userId:0,
      userName: this.username,
      password: this.password,
      role: Number(this.role),
    };
   
    
   //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  // });
    // this.http.post(this.url, user, { headers }).subscribe(
    const response= this.api.Register(user);
    debugger
    response.subscribe(
      (response:any) => {
        console.log(response);
        if(response){
          this.notify.success(`${response.message} Successfully!`, 'Success',{closeButton:true,positionClass:'toast-bottom-right'});
          this.itsactivated();
        }
        
       
      },
      (err) => {
        this.error = err.message; 
          this.notify.error(`${err.error}!..`, 'Error',{closeButton:true,positionClass:'toast-bottom-right'});
      }
    );
  }   

  Login(){
    const loginModel:LoginRequired={
      userName:this.loginUserName,
      password:this.loginuserPassword
    }

   var result= this.api.Login(loginModel)
    .subscribe(
      (response:any) => {
        debugger
        if(response.status){
          debugger
          this.notify.success(response.message, 'Success',{closeButton:true,positionClass:'toast-bottom-right'});
          this.loginUserName='';
          this.loginuserPassword='';
          localStorage.setItem("token",response.token);
          this.router.navigateByUrl('/app-dashboard', { replaceUrl: true });
        }
      
        
      },
      (err) => {
        if(!err.status){this.error = err.message; }
          this.notify.error(`${err.message}!..`, 'Error',{closeButton:true,positionClass:'toast-bottom-right'});
      }
    );
    
  }
  itsactivated() {
    this.isActive = !this.isActive;
  }

  // ngDoCheck(): void {
  //   // Update userData with new values
  //   setUserData(this.username, this.email, this.password);
  // }
}