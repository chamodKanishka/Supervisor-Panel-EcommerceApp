import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {AddNewItemComponent} from './components/add-new-item/add-new-item.component';
import {ItemListComponent} from './components/item-list/item-list.component';
import {ViewItemComponent} from './components/view-item/view-item.component';
import {EditItemComponent} from './components/edit-item/edit-item.component';

const appRoutes: Routes = [
	{
		path : '',
		redirectTo: '/login',
		pathMatch: 'full'
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'addNewBook',
		component: AddNewItemComponent
	},
	{
		path: 'bookList',
		component: ItemListComponent
	},
	{
		path: 'viewBook/:id',
		component: ViewItemComponent
	},
	{
		path: 'editBook/:id',
		component: EditItemComponent
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
