import { EndPointServiceService } from './../end-point-service.service';
import { Component, OnInit, ViewChild} from '@angular/core';

import { Course } from '../../models/Courses';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class HttperrorComponent implements OnInit {

  courses: any[];
  course: Course = {
    name: '',
    author: '',
    price: 0
  };
  loaded: boolean = false;
  showForm: boolean = false;

   // ViewChild directive should use the form name as specified in <form> tag
  @ViewChild('courseForm') form: any;

  constructor(private service: EndPointServiceService) {

  }

  ngOnInit() {

    // By default populate all Courses....
    this.service.getPosts().subscribe(
      response => {
        console.log(response.json());
        this.courses = response.json();
        this.loaded = true;
      },
      error => {
        alert ("An unexpected error occurred");
        console.log(error);
        this.loaded = false;

      });

  }

  onSubmit({ value, valid }: { value: Course, valid: boolean }) {
    if (!valid) {
      console.log("Error: Invalid input in form");
    }
    else {

      // Invoke createNewCourse
      this.createNewCourse(value);

      //Clear form
      this.form.reset();
    }
  }

   // Method for creating a new post
   createNewCourse(course: Course) {

    console.log("UserInput", course);

    this.service.createPost(course).subscribe (
      response => {
        var newCourse = response.json();
        console.log(newCourse);
        this.courses.unshift(newCourse);
      },
      error => {
        alert ("An unexpected error occurred");
        console.log(error);
      });   
   }

   // Method for updating an existing post 
   updateExistingPost (uPost){

    this.service.updatePost(uPost).subscribe (
      response => {
        console.log(response.json());},
      error => {
          alert ("An unexpected error occurred");
          console.log(error);
      });

    }
    // Method for deleting an existing post 

    deleteExistingPost (dPost){
      // Enable this to check for errors 
      // this.service.deletePost(dPost).subscribe (
      this.service.deletePost(550).subscribe (
        response => {
          console.log("Post deleted successfully");
          let dPostIndex = this.courses.indexOf(dPost);
          this.courses.splice(dPostIndex,1); },
        error => {
         
          if (error.status == 404)
            alert ("Post already deleted");
          else {
            alert ("An unexpected error occurred");
            console.log(error);
          }
        });
    }

}
