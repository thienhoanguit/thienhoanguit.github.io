import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteRoutingModule } from './note.routing.module';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { AccordionModule } from 'primeng/accordion';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { InputSwitchModule } from 'primeng/inputswitch';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { NoteComponent } from './note.component';
import { DetailComponent } from './detail/detail.component';
import { EditorModule } from 'primeng/editor';

const PRIMENG_MODULES = [AccordionModule, RadioButtonModule, DividerModule, ButtonModule, DropdownModule, TableModule, 
  CheckboxModule, InputSwitchModule, AvatarModule, AvatarGroupModule, EditorModule ];


@NgModule({
  declarations: [NoteComponent, DetailComponent],
  imports: [
    CommonModule, NoteRoutingModule, FormsModule,
    ...PRIMENG_MODULES
  ]
})
export class NoteModule { }
