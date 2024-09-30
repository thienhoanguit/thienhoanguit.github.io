import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataCrudComponent } from './data-crud.component';

const routes: Routes = [{ path: '', component: DataCrudComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class DataCrudRoutingModule { }
