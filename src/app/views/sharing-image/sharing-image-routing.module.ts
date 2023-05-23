import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharingImagePage } from './sharing-image.page';

const routes: Routes = [
  {
    path: '',
    component: SharingImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharingImagePageRoutingModule {}
