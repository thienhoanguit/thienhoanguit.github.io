import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataCrudComponent } from './data-crud.component';
import { DataCrudRoutingModule } from './data-crud.routing.module';

import { AccordionModule } from 'primeng/accordion';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DividerModule } from 'primeng/divider';
import { TreeTableModule } from 'primeng/treetable';
const PRIMENG_MODULES = [AccordionModule, RadioButtonModule, DividerModule, TreeTableModule];

@NgModule({
	declarations: [DataCrudComponent],
	imports: [CommonModule, DataCrudRoutingModule, FormsModule, ...PRIMENG_MODULES],
	providers: [
	],
})
export class DataCrudModule { }
