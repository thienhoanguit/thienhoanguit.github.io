import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login.routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';

const PRIMENG_MODULES = [CardModule, ButtonModule, InputTextModule,FloatLabelModule];

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule, FormsModule, ...PRIMENG_MODULES],
  providers: [],
})
export class LoginModule {}
