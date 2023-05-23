import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BluetoothPage } from './bluetooth.page';

const routes: Routes = [
  {
    path: '',
    component: BluetoothPage,
    children :[
      {
        path: 'sharing-image',
        loadChildren: () => import('../../views/sharing-image/sharing-image.module').then( m => m.SharingImagePageModule)
      },

  ],
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BluetoothPageRoutingModule {}
