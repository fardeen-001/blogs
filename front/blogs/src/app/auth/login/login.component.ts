import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
allUser:any;
  constructor(private authService:AuthService
    ,private router:Router
    ) { }

  ngOnInit(): void {
    this.authService.login().subscribe((response:any)=>{
      this.allUser=[...response]
    })
  }

  login(ngForm:NgForm){
    let auth={
      email:ngForm.value.email,
      password:ngForm.value.password
    }
    console.log(auth)
    let response=this.allUser.find((element:any)=>{
      if(element.email===auth.email && element.password==auth.password){
        return element;
      }else{
        return 0;
      }
    })

    console.log(response);
    if(response){
      localStorage.setItem("auth",JSON.stringify(response));
      this.router.navigate(["/blogs"])
    }else{

    }

    
  }

}
