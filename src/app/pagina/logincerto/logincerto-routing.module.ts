import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogincertoPage } from './logincerto.page';

const routes: Routes = [
  {
    path: '',
    component: LogincertoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogincertoPageRoutingModule {}
