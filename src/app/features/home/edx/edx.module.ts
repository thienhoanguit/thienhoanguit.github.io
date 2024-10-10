import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdxComponent } from './edx.component';

import { StepperModule } from 'primeng/stepper';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { FormsModule } from '@angular/forms';
import { EdxRoutingModule } from './edx.routing.module';
import { DividerModule } from 'primeng/divider';
const PRIMENG_MODULES = [MenubarModule, ButtonModule, MenuModule, StepperModule, DividerModule ];

@NgModule({
  declarations: [EdxComponent],
  imports: [
    CommonModule, EdxRoutingModule, FormsModule, 
    ...PRIMENG_MODULES
  ]
})
export class EdxModule { }
