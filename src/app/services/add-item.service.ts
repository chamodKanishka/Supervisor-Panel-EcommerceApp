import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Items} from '../models/items';

@Injectable()
export class AddItemService {

  constructor(private http:Http) { }

  sendItem(item:Items) {
  	let url = "http://localhost:8181/item/add";
    
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, JSON.stringify(item), {headers: headers});
  }

}
