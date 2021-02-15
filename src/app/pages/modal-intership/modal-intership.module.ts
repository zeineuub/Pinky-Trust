import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalIntershipPageRoutingModule } from './modal-intership-routing.module';

import { ModalIntershipPage } from './modal-intership.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ModalIntershipPageRoutingModule
  ],
  declarations: [ModalIntershipPage]
})
export class ModalIntershipPageModule {}
