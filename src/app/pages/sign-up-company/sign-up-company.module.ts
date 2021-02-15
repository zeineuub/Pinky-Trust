import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpCompanyPageRoutingModule } from './sign-up-company-routing.module';

import { SignUpCompanyPage } from './sign-up-company.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpCompanyPageRoutingModule
  ],
  declarations: [SignUpCompanyPage]
})
export class SignUpCompanyPageModule {}
