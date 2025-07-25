export interface LoginRequired{
    userName:string;
    password:string ;
}

export interface responseData{
    Message :string,
    status :boolean,
    token:string 
}

export interface registerUser{
     userId :number,
     userName :string,
     password :string
     role :number,
}
export enum RoleEnum {
  Admin = 1,
  Editor = 2,
  Viewer = 3
}
export interface registerresponseData{
    Message :string,
   
}