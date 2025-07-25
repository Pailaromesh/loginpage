import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Router } from 'express';
import { environment } from './baseUrl';
import { LoginRequired, registerresponseData,  registerUser,  responseData } from './model/LoginRequired';
import { map } from 'rxjs';
import { ApiResponse, RegisterResponse } from './model/response';




@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http:HttpClient) { }
  // constructor(private route:Router) { }

Login(credentials:LoginRequired){
 return  this.http.post<ApiResponse<responseData>>(`${environment.baseUrl}/User/LogIn`,credentials)//.pipe(
//     map((res)=>{
// if(res.status){
//   localStorage.setItem("token",res.token);
//   return res;
// }
//     }),

//   )
}
Register(user:registerUser){
  
  return  this.http.post<RegisterResponse<registerresponseData>>(`${environment.baseUrl}/Auth/register`,user);
}
}
