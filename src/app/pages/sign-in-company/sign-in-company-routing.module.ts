import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInCompanyPage } from './sign-in-company.page';

const routes: Routes = [
  {
    path: '',
    component: SignInCompanyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignInCompanyPageRoutingModule {}
