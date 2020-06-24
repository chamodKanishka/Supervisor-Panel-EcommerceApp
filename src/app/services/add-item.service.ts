import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Books} from '../models/books';

@Injectable()
export class AddItemService {

  constructor(private http:Http) { }

  sendBook(book:Books) {
  	let url = "http://localhost:8181/item/add";
    
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, JSON.stringify(book), {headers: headers});
  }

}
