import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublishComponent } from './publish.component';

const routes: Routes = [{
	path: '',
	component: PublishComponent,
	children: [
		{
			path: 'login',
			loadChildren: () => import('./login/login.module').then((m) => m.LoginModule),
		},
		{
			path: '',
			pathMatch: 'full',
			redirectTo: 'login'
		}
	]
}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PublishRoutingModule { }
