import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Promotion2Page } from './promotion2.page';

const routes: Routes = [
  {
    path: '',
    component: Promotion2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Promotion2PageRoutingModule {}
