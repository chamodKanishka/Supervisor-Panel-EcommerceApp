import { Component, OnInit } from '@angular/core';
import {Params, ActivatedRoute, Router} from '@angular/router';
import {GetItemService} from '../../services/get-item.service';
import {Items} from '../../models/items';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {

  public book:Items = new Items();
  public bookId: number;

  constructor(public getBookService:GetItemService,
  	public route:ActivatedRoute, public router:Router) { }

  onSelect(book:Items) {
    this.router.navigate(['/editBook', this.book.id])
    // .then(s => location.reload())
    ;
  }

  ngOnInit() {
  	this.route.params.forEach((params: Params) => {
  		this.bookId = Number.parseInt(params['id']);
  	});

  	this.getBookService.getBook(this.bookId).subscribe(
  		res => {
  			this.book = res.json();
  		},
  		error => {
  			console.log(error);
  		}
  	);

  	
  }

}
