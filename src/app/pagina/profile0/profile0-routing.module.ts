import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Profile0Page } from './profile0.page';

const routes: Routes = [
  {
    path: '',
    component: Profile0Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Profile0PageRoutingModule {}
