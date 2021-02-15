import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignInCompanyPageRoutingModule } from './sign-in-company-routing.module';

import { SignInCompanyPage } from './sign-in-company.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignInCompanyPageRoutingModule
  ],
  declarations: [SignInCompanyPage]
})
export class SignInCompanyPageModule {}
