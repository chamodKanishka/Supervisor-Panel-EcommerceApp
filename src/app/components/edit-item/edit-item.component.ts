import { Component, OnInit } from '@angular/core';
import { UploadImageService } from '../../services/upload-image.service';
import { Books } from '../../models/books';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { GetItemService } from '../../services/get-item.service';
import { EditItemService } from '../../services/edit-item.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  public bookId: number;
  public book: Books = new Books();
  public bookUpdated: boolean;

  constructor(
  	public uploadImageService: UploadImageService,
  	public editBookService: EditItemService,
  	public getBookService: GetItemService,
  	public route: ActivatedRoute,
  	public router: Router
  	) { }

  onSubmit() {
  	this.editBookService.sendBook(this.book).subscribe(
  		data => {
  			this.uploadImageService.modify(JSON.parse(JSON.parse(JSON.stringify(data))._body).id);
  			this.bookUpdated=true;
  		},
  		error => console.log(error)
  	);
  }

  ngOnInit() {
  	this.route.params.forEach((params: Params) => {
  		this.bookId = Number.parseInt(params['id']);
  	});

  	this.getBookService.getBook(this.bookId).subscribe(
  		res => {
  			this.book = res.json();
  		}, 
  		error => console.log(error)
  	)
  }

}
