import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogincertoPageRoutingModule } from './logincerto-routing.module';

import { LogincertoPage } from './logincerto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogincertoPageRoutingModule
  ],
  declarations: [LogincertoPage]
})
export class LogincertoPageModule {}
