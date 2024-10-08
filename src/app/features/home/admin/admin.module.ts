import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { AccordionModule } from 'primeng/accordion';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { AdminRoutingModule } from './admin.routing.module';
import { CheckboxModule } from 'primeng/checkbox';
import { UserComponent } from './user/user.component';
import { InputSwitchModule } from 'primeng/inputswitch';
const PRIMENG_MODULES = [AccordionModule, RadioButtonModule, DividerModule, ButtonModule, DropdownModule, TableModule, 
  CheckboxModule, InputSwitchModule ];



@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ...PRIMENG_MODULES
  ]
})
export class AdminModule { }
