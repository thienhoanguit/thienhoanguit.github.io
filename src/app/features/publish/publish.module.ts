import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { PublishRoutingModule, PublishComponent} from '.';

// const MATERIAL_MODULES = [MatCardModule, MatFormFieldModule, MatButtonModule, MatInputModule];

@NgModule({
  declarations: [PublishComponent],
  imports: [CommonModule, PublishRoutingModule, FormsModule],
  providers: [
  ],
})
export class PublishModule {}
