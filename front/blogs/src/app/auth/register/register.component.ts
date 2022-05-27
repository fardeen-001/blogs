import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { auth, AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  register(ngForm:NgForm){
    const user:auth={
      firstname:ngForm.value.firstname,
      lastname:ngForm.value.lastname,
      email:ngForm.value.email,
      password:ngForm.value.password,
      dob:ngForm.value.dob,
      status:ngForm.value.status,
      role:ngForm.value.role
    }
    this.authService.register(user).subscribe((response:any)=>{
      console.log(response)
    },err=>{
      console.log(err);
    });

  }
}
