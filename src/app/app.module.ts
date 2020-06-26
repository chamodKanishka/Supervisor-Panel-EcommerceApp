import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { LoginService } from './services/login.service';
import { AddItemService } from './services/add-item.service';
import { UploadImageService } from './services/upload-image.service';
import { GetItemListService } from './services/get-item-list.service';
import { GetItemService } from './services/get-item.service';
import { EditItemService } from './services/edit-item.service';
import { RemoveItemService } from './services/remove-item.service';


import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { AddNewItemComponent } from './components/add-new-item/add-new-item.component';
import { ItemListComponent, DialogResultExampleDialog } from './components/item-list/item-list.component';
import { ViewItemComponent } from './components/view-item/view-item.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';

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
    AddNewItemComponent,
    ItemListComponent,
    DialogResultExampleDialog,
    ViewItemComponent,
    EditItemComponent
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
      { path:'addNewBook', component: AddNewItemComponent},
      { path:'bookList', component: ItemListComponent},
      { path:'viewBook/:id', component: ViewItemComponent},
      { path:'editBook/:id', component: EditItemComponent},
      
    ])
    
  ],
  providers: [
    LoginService,
    AddItemService,
    UploadImageService,
    GetItemListService,
    GetItemService,
    EditItemService,
    RemoveItemService
  ],
  bootstrap: [AppComponent, DialogResultExampleDialog]
})
export class AppModule { }
