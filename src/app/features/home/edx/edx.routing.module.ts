import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EdxComponent } from './edx.component';

const routes: Routes = [
  { path: '', component: EdxComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdxRoutingModule {}
