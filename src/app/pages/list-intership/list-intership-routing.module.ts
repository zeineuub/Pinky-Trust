import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListIntershipPage } from './list-intership.page';

const routes: Routes = [
  {
    path: '',
    component: ListIntershipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListIntershipPageRoutingModule {}
