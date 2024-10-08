import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

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
				path: 'data-hub',
				loadChildren: () => import('./data-crud/data-crud.module').then((m) => m.DataCrudModule),
			}
			
		]
	}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class HomeRoutingModule { }
