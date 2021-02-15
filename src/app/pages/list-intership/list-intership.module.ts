import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListIntershipPageRoutingModule } from './list-intership-routing.module';

import { ListIntershipPage } from './list-intership.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListIntershipPageRoutingModule
  ],
  declarations: [ListIntershipPage]
})
export class ListIntershipPageModule {}
