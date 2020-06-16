import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
// import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http: Http) { }

  sendCredential(username:string, password:string){
    let url="http://localhost:8081/token";
    let encodedCredential = btoa(username+":"+password);
    let basicHeader = "Basic "+encodedCredential;
    let headers = new Headers ({
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Authorization' : basicHeader
    });

    return this.http.get(url, {headers: headers});
  }
}
