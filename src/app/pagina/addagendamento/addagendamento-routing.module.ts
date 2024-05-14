import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddagendamentoPage } from './addagendamento.page';

const routes: Routes = [
  {
    path: '',
    component: AddagendamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddagendamentoPageRoutingModule {}
