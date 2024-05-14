import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Promotion3Page } from './promotion3.page';

const routes: Routes = [
  {
    path: '',
    component: Promotion3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Promotion3PageRoutingModule {}
