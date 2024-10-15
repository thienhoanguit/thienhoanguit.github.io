import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';


import { PublishRoutingModule, PublishComponent} from '.';

const PRIMENG_MODULES = [CardModule, ButtonModule, InputTextModule,FloatLabelModule, MenubarModule, MenuModule];

@NgModule({
  declarations: [PublishComponent],
  imports: [CommonModule, PublishRoutingModule, FormsModule, ...PRIMENG_MODULES],
  providers: [
  ],
})
export class PublishModule {}
