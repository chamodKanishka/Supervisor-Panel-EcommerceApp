import { Component, OnInit } from '@angular/core';
import { Books } from '../../models/books';
import {AddItemService} from '../../services/add-item.service';
import {UploadImageService} from '../../services/upload-image.service';

@Component({
  selector: 'app-add-new-book',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.css']
})
export class AddNewItemComponent implements OnInit {

  public newItem: Books = new Books();
  public itemAdded: boolean;

  constructor(public addBookService: AddItemService, public uploadImageService: UploadImageService) { }

  onSubmit() {
  	this.addBookService.sendBook(this.newItem).subscribe(
  		res => {
  			this.uploadImageService.upload(JSON.parse(JSON.parse(JSON.stringify(res))._body).id);
  			this.itemAdded = true;
  			this.newItem = new Books();
  			this.newItem.active = true;
  			this.newItem.category = 'Management';
  			this.newItem.language = 'english';
  			this.newItem.format = 'paperback';
  		},
  		error => {
  			console.log(error);
  		}
  	);
  }

  ngOnInit() {
  	this.itemAdded = false;
  	this.newItem.active = true;
  	this.newItem.category = 'Management';
  	this.newItem.language = 'english';
  	this.newItem.format = 'paperback';
  }

}
