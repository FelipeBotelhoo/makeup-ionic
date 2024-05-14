import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Promotion2PageRoutingModule } from './promotion2-routing.module';

import { Promotion2Page } from './promotion2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Promotion2PageRoutingModule
  ],
  declarations: [Promotion2Page]
})
export class Promotion2PageModule {}
