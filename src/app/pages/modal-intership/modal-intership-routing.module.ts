import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalIntershipPage } from './modal-intership.page';

const routes: Routes = [
  {
    path: '',
    component: ModalIntershipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalIntershipPageRoutingModule {}
