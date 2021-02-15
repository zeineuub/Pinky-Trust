import { NgModel } from '@angular/forms';
import {BottomMenuComponent } from './bottom-menu/bottom-menu.component';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import {RiderMenuComponent} from './rider-menu/rider-menu.component';
@NgModule({
    declarations: [
        BottomMenuComponent,
        RiderMenuComponent
    ],
    exports: [
        BottomMenuComponent,
        RiderMenuComponent
    ],
    imports: [
        IonicModule,
        CommonModule

    ]
})
export class AppComponentsModule { }
