import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface auth{
  firstname?:string;
  lastname?:string;
  email:string;
  password:string;
  dob?:string;
  status?:string;
  role?:string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  register(user:auth){
    return this.http.post(`${environment.fakeServerURl}user`,user);
  }

  login(){
    return this.http.get(`${environment.fakeServerURl}user`);

  }
}
