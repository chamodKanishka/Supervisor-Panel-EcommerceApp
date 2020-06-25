import { Component, OnInit } from '@angular/core';
import {Items} from '../../models/items';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login.service';
import {GetBookListService} from '../../services/get-book-list.service';
import {RemoveBookService} from '../../services/remove-book.service';

import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-book-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
	public selectedBook : Items;
	public checked: boolean;
	public bookList: Items[];
	public allChecked: boolean;
	public removeBookList: Items[] = new Array();

  constructor(
    public getBookListService: GetBookListService,
    public removeBookService: RemoveBookService,
    public router:Router,
    public dialog:MatDialog
    ) { }

  onSelect(book:Items) {
    this.selectedBook=book;
    this.router.navigate(['/viewBook', this.selectedBook.id]);
  }

  openDialog(book:Items) {
    let dialogRef = this.dialog.open(DialogResultExampleDialog);
    dialogRef.afterClosed().subscribe(
      result => {
        console.log(result);
        if(result=="yes") {
          this.removeBookService.sendBook(book.id).subscribe(
            res => {
              console.log(res);
              this.getBookList();
            },
            err => {
              console.log(err);
            }
            );
        }
      }
      );
  }

  updateRemoveBookList(checked:boolean, book:Items) {
    if(checked) {
      this.removeBookList.push(book);
    } else {
      this.removeBookList.splice(this.removeBookList.indexOf(book), 1);
    }
  }

  updateSelected(checked: boolean) {
    if(checked) {
      this.allChecked = true;
      this.removeBookList=this.bookList.slice();
    } else {
      this.allChecked=false;
      this.removeBookList=[];
    }
  }

  removeSelectedBooks() {
    let dialogRef = this.dialog.open(DialogResultExampleDialog);
    dialogRef.afterClosed().subscribe(
      result => {
        console.log(result);
        if(result=="yes") {
          for (let book of this.removeBookList) {
            this.removeBookService.sendBook(book.id).subscribe(
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

  getBookList() {
    this.getBookListService.getBookList().subscribe(
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
  	this.getBookList();
  }

}

@Component({
  selector: 'dialog-result-example-dialog',
  templateUrl: './dialog-result-example-dialog.html'
})
export class DialogResultExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogResultExampleDialog>) {}
}
