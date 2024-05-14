import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Promotion3PageRoutingModule } from './promotion3-routing.module';

import { Promotion3Page } from './promotion3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Promotion3PageRoutingModule
  ],
  declarations: [Promotion3Page]
})
export class Promotion3PageModule {}
