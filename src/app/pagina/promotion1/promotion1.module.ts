import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Promotion1PageRoutingModule } from './promotion1-routing.module';

import { Promotion1Page } from './promotion1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Promotion1PageRoutingModule
  ],
  declarations: [Promotion1Page]
})
export class Promotion1PageModule {}
