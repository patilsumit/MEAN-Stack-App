import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class EndPointServiceService {

  // Enable this to get error condition checking 
  // private myURL = 'http://jsonxxxxxplaceholder.typicode.com/posts';
  //private myURL = 'http://jsonplaceholder.typicode.com/posts';
  private myURL = '/api/courses';

  constructor(private myHttp : Http) {

    
   }

  getPosts() {

    return this.myHttp.get(this.myURL);

  }

  createPost(userPost) {
  const headers = new Headers({'Content-Type': 'application/json'});
  //let headers =  {headers: new  HttpHeaders({ 'Content-Type': 'application/application/json'})};


    return this.myHttp.post(this.myURL,JSON.stringify(userPost), {headers: headers});

  }

  updatePost(userPost) {

    return this.myHttp.put(this.myURL + '/' + userPost.id,JSON.stringify(userPost));
  
  }

  deletePost(userPost) {

    return this.myHttp.delete(this.myURL + '/' + userPost.id,JSON.stringify(userPost));

  }
}
