import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Items} from '../models/items';

@Injectable()
export class RemoveItemService {

  constructor(private http:Http) { }

  sendItem(itemId: number) {
  	let url = "http://localhost:8181/item/remove";
    
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, itemId, {headers: headers});
  }

}
