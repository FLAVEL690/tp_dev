import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharingImagePageRoutingModule } from './sharing-image-routing.module';

import { SharingImagePage } from './sharing-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharingImagePageRoutingModule
  ],
  declarations: [SharingImagePage]
})
export class SharingImagePageModule {}
