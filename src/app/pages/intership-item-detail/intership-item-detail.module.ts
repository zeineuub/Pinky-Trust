import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntershipItemDetailPageRoutingModule } from './intership-item-detail-routing.module';

import { IntershipItemDetailPage } from './intership-item-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntershipItemDetailPageRoutingModule
  ],
  declarations: [IntershipItemDetailPage]
})
export class IntershipItemDetailPageModule {}
