import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Items} from '../models/items';

@Injectable()
export class EditItemService {

  constructor(private http:Http) { }

  sendBook(book:Items) {
  	let url = "http://localhost:8181/book/update";
    
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, JSON.stringify(book), {headers: headers});
  }
}
