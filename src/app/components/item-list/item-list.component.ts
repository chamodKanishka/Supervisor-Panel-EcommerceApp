import { Component, OnInit } from '@angular/core';
import {Items} from '../../models/items';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login.service';
import {GetItemListService} from '../../services/get-item-list.service';
import {RemoveItemService} from '../../services/remove-item.service';

import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
	public selectedItem : Items;
	public checked: boolean;
	public bookList: Items[];
	public allChecked: boolean;
	public removeItemList: Items[] = new Array();

  constructor(
    public getItemListService: GetItemListService,
    public removeItemService: RemoveItemService,
    public router:Router,
    public dialog:MatDialog
    ) { }

  onSelect(item:Items) {
    this.selectedItem=item;
    this.router.navigate(['/viewItem', this.selectedItem.id]);
  }

  openDialog(item:Items) {
    let dialogRef = this.dialog.open(DialogResultExampleDialog);
    dialogRef.afterClosed().subscribe(
      result => {
        console.log(result);
        if(result=="yes") {
          this.removeItemService.sendItem(item.id).subscribe(
            res => {
              console.log(res);
              this.getItemList();
            },
            err => {
              console.log(err);
            }
            );
        }
      }
      );
  }

  updateRemoveItemList(checked:boolean, item:Items) {
    if(checked) {
      this.removeItemList.push(item);
    } else {
      this.removeItemList.splice(this.removeItemList.indexOf(item), 1);
    }
  }

  updateSelected(checked: boolean) {
    if(checked) {
      this.allChecked = true;
      this.removeItemList=this.bookList.slice();
    } else {
      this.allChecked=false;
      this.removeItemList=[];
    }
  }

  removeSelectedItems() {
    let dialogRef = this.dialog.open(DialogResultExampleDialog);
    dialogRef.afterClosed().subscribe(
      result => {
        console.log(result);
        if(result=="yes") {
          for (let item of this.removeItemList) {
            this.removeItemService.sendItem(item.id).subscribe(
              res => {

              },
              err => {
              }
              );
          }
          location.reload();
        }
      }
      );
  }

  getItemList() {
    this.getItemListService.getItemList().subscribe(
      res => {
        console.log(res.json());
        this.bookList=res.json();
      },
      error => {
        console.log(error);
      }
      );
  }

  ngOnInit() {
  	this.getItemList();
  }

}

@Component({
  selector: 'dialog-result-example-dialog',
  templateUrl: './dialog-result-example-dialog.html'
})
export class DialogResultExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogResultExampleDialog>) {}
}
