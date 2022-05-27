import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blogs';
  constructor(private router:Router){

  }

  ngOnInit()
  {


  }

  logout(){
    localStorage.clear()
    this.router.navigate(["/auth"]);
  }

}

