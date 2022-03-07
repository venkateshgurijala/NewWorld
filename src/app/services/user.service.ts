import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn:'root'
})

export class userService{

    constructor( private http: HttpClient ){}
    getmethod(){
       return this.http.get("https://jsonplaceholder.typicode.com/users");
         }
    
    
}