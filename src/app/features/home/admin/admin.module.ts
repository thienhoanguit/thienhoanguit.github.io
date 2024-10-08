import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { AccordionModule } from 'primeng/accordion';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { AdminRoutingModule } from './admin.routing.module';
const PRIMENG_MODULES = [AccordionModule, RadioButtonModule, DividerModule, ButtonModule, DropdownModule, TableModule ];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ...PRIMENG_MODULES
  ]
})
export class AdminModule { }
