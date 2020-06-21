import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { LoginService } from './services/login.service';
import { AddBookService } from './services/add-book.service';
import { UploadImageService } from './services/upload-image.service';
import { GetBookListService } from './services/get-book-list.service';
import { GetBookService } from './services/get-book.service';
import { EditBookService } from './services/edit-book.service';
import { RemoveBookService } from './services/remove-book.service';


import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { AddNewBookComponent } from './components/add-new-book/add-new-book.component';
import { BookListComponent, DialogResultExampleDialog } from './components/book-list/book-list.component';
import { ViewBookComponent } from './components/view-book/view-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    AddNewBookComponent,
    BookListComponent,
    DialogResultExampleDialog,
    ViewBookComponent,
    EditBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatListModule,
    MatIconModule,
    RouterModule.forRoot([
      { path:'', component: LoginComponent},
      { path:'login', component: LoginComponent},
      { path:'addNewBook', component: AddNewBookComponent},
      { path:'bookList', component: BookListComponent},
      { path:'viewBook/:id', component: ViewBookComponent},
      { path:'editBook/:id', component: EditBookComponent},
      
    ])
    
  ],
  providers: [
    LoginService,
    AddBookService,
    UploadImageService,
    GetBookListService,
    GetBookService,
    EditBookService,
    RemoveBookService
  ],
  bootstrap: [AppComponent, DialogResultExampleDialog]
})
export class AppModule { }
