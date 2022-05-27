import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
blogss?:any[];
singleBlog={} as any;
 mode="insert";
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.blogger();
  }

blogger(){
  this.http.get(`${environment.fakeServerURl}blogs`).subscribe((data:any)=>{
    this.blogss=data;
  })
}


editBlogs(id:any){
  this.http.get(`${environment.fakeServerURl}blogs/${id}`).subscribe((data:any)=>{
    console.log(data)
    this.singleBlog.title=data.title;
    this.singleBlog.description=data.description;
    this.singleBlog.date=data.date;
    this.singleBlog.status=data.status;
    this.singleBlog.id=data.id;
    this.mode="edit";
  })
}
public deleteBlogs(id:any){
  console.log("Hello Wolrd",id)
  // this.http.delete(`${environment.fakeServerURl}blogs/${id}`);
  fetch(`${environment.fakeServerURl}blogs/${id}`,{
    method:"DELETE"
  }).then((res)=>{
    console.log(res)
  })
  this.blogger();
}

  saveBlogs(ngForm:NgForm){
    let blogs={
      title:ngForm.value.title,
      description:ngForm.value.description,
      date:ngForm.value.date,
      status:ngForm.value.status,
    }
    
      this.http.post(`${environment.fakeServerURl}blogs`,blogs).subscribe((response:any)=>{
        console.log("post saved")})

    
      this.blogger();

 
  
  }

  updateBlogs(ngForm:NgForm){
    console.log(ngForm.value  )
    let blogs={
      title:ngForm.value.title,
      description:ngForm.value.description,
      date:ngForm.value.date,
      status:ngForm.value.status,
    }
    
      this.http.put(`${environment.fakeServerURl}blogs/${this.singleBlog.id}`,blogs).subscribe((response:any)=>{
        console.log("post updated")})
      this.blogger();

 
  
  }

 

}
