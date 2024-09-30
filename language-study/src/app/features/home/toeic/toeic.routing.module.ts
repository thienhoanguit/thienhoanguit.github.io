import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToeicComponent } from './toeic.component';

const routes: Routes = [{ path: '', component: ToeicComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToeicRoutingModule {}
