import { Component, OnInit } from '@angular/core';
import {Params, ActivatedRoute, Router} from '@angular/router';
import {GetItemService} from '../../services/get-item.service';
import {Items} from '../../models/items';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {

  public item:Items = new Items();
  public itemId: number;

  constructor(public getItemService:GetItemService,
  	public route:ActivatedRoute, public router:Router) { }

  onSelect(item:Items) {
    this.router.navigate(['/editItem', this.item.id])
    // .then(s => location.reload())
    ;
  }

  ngOnInit() {
  	this.route.params.forEach((params: Params) => {
  		this.itemId = Number.parseInt(params['id']);
  	});

  	this.getItemService.getItem(this.itemId).subscribe(
  		res => {
  			this.item = res.json();
  		},
  		error => {
  			console.log(error);
  		}
  	);

  	
  }

}
