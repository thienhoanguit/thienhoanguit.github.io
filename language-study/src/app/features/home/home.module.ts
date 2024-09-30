import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { HomeRoutingModule, HomeComponent} from './';
import { MenubarModule } from 'primeng/menubar';

const PRIMENG_MODULES = [MenubarModule ];

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, FormsModule, ...PRIMENG_MODULES],
  providers: [
  ],
})
export class HomeModule {}
