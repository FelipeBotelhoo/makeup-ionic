import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Promotion1Page } from './promotion1.page';

const routes: Routes = [
  {
    path: '',
    component: Promotion1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Promotion1PageRoutingModule {}
