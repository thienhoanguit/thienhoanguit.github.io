import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isLogged } from './shared/auth/is-logged.guard';
import { isNotLogged } from './shared/auth/is-not-logged.guard';

const routes: Routes = [
  {
    path: '',
    canMatch: [isLogged],
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '',
    canMatch: [isNotLogged],
    loadChildren: () => import('./features/publish/publish.module').then((m) => m.PublishModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
