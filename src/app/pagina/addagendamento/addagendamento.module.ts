import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddagendamentoPageRoutingModule } from './addagendamento-routing.module';

import { AddagendamentoPage } from './addagendamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddagendamentoPageRoutingModule
  ],
  declarations: [AddagendamentoPage]
})
export class AddagendamentoPageModule {}
