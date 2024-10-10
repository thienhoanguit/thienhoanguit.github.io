import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthService } from '../../shared/auth/auth.service';
import { isAdmin } from '../../shared/auth/is-admin.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		children: [
			{
				path: 'toeic',
				loadChildren: () => import('./toeic/toeic.module').then((m) => m.ToeicModule),
			},
			{
				path: 'edx',
				loadChildren: () => import('./edx/edx.module').then((m) => m.EdxModule),
			},
			{
				path: 'data-hub',
				loadChildren: () => import('./data-crud/data-crud.module').then((m) => m.DataCrudModule),
			},
			{
				path: 'admin',
				canMatch: [isAdmin],
				loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
			},
			{
				path: '**',
				component: PageNotFoundComponent
			}
		]
	}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule], 
})
export class HomeRoutingModule { }
