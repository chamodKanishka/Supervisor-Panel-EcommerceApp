import { Component, OnInit } from '@angular/core';
import { UploadImageService } from '../../services/upload-image.service';
import { Items } from '../../models/items';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { GetItemService } from '../../services/get-item.service';
import { EditItemService } from '../../services/edit-item.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  public itemId: number;
  public item: Items = new Items();
  public itemUpdated: boolean;

  constructor(
  	public uploadImageService: UploadImageService,
  	public editItemService: EditItemService,
  	public getItemService: GetItemService,
  	public route: ActivatedRoute,
  	public router: Router
  	) { }

  onSubmit() {
  	this.editItemService.sendItem(this.item).subscribe(
  		data => {
  			this.uploadImageService.modify(JSON.parse(JSON.parse(JSON.stringify(data))._body).id);
  			this.itemUpdated=true;
  		},
  		error => console.log(error)
  	);
  }

  ngOnInit() {
  	this.route.params.forEach((params: Params) => {
  		this.itemId = Number.parseInt(params['id']);
  	});

  	this.getItemService.getItem(this.itemId).subscribe(
  		res => {
  			this.item = res.json();
  		}, 
  		error => console.log(error)
  	)
  }

}
