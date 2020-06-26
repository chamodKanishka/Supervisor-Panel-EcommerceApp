import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';


@Injectable()
export class GetItemService {

  constructor(private http:Http) { }

  getItem(id:number) {
  	let url = "http://localhost:8181/item/"+id;
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.get(url, {headers: headers});
  }
}
