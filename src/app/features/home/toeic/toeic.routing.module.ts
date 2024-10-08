import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToeicComponent } from './toeic.component';
import { UnitComponent } from './unit/unit.component';

const routes: Routes = [
  { path: '', component: ToeicComponent },
  { path: 'unit/:unit_name', component: UnitComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToeicRoutingModule {}
