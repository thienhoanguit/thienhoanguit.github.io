import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteComponent } from './note.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  { path: '', component: NoteComponent },
  { path: 'detail/:note_id', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoteRoutingModule {}
