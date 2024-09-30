import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToeicComponent } from './toeic.component';
import { ToeicRoutingModule } from './toeic.routing.module';

import { AccordionModule } from 'primeng/accordion';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DividerModule } from 'primeng/divider';
const PRIMENG_MODULES = [AccordionModule, RadioButtonModule, DividerModule ];

@NgModule({
  declarations: [ToeicComponent],
  imports: [CommonModule, ToeicRoutingModule, FormsModule, ...PRIMENG_MODULES],
  providers: [
  ],
})
export class ToeicModule {}
