import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntershipItemDetailPage } from './intership-item-detail.page';

const routes: Routes = [
  {
    path: '',
    component: IntershipItemDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntershipItemDetailPageRoutingModule {}
