import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Profile0PageRoutingModule } from './profile0-routing.module';

import { Profile0Page } from './profile0.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Profile0PageRoutingModule
  ],
  declarations: [Profile0Page]
})
export class Profile0PageModule {}
