import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToeicComponent } from './toeic.component';
import { UnitComponent } from './unit/unit.component';
import { ToeicRoutingModule } from './toeic.routing.module';

import { AccordionModule } from 'primeng/accordion';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { CachedSrcDirective } from '../../../shared/directive/iframe.directive';
const PRIMENG_MODULES = [AccordionModule, RadioButtonModule, DividerModule, ButtonModule, DropdownModule ];

@NgModule({
  declarations: [ToeicComponent, UnitComponent, CachedSrcDirective],
  imports: [CommonModule, ToeicRoutingModule, FormsModule, ...PRIMENG_MODULES],
  providers: [
  ],
})
export class ToeicModule {}
