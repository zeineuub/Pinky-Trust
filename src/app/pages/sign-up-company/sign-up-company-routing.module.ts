import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpCompanyPage } from './sign-up-company.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpCompanyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpCompanyPageRoutingModule {}
