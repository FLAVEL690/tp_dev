import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children :[

      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },

      {
        path: 'home',
        loadChildren: () => import('../../home/home.module').then( m => m.HomePageModule)
      },
     
      {
        path: 'accueil',
        loadChildren: () => import('../../views/accueil/accueil.module').then( m => m.AccueilPageModule)
      },
      {
        path: 'appareil',
        loadChildren: () => import('../../views/appareil/appareil.module').then( m => m.AppareilPageModule)
      },
      {
        path: 'bluetooth',
        loadChildren: () => import('../../views/bluetooth/bluetooth.module').then( m => m.BluetoothPageModule)
      },
     
      {
        path: 'apropos',
        loadChildren: () => import('../../views/apropos/apropos.module').then( m => m.AproposPageModule)
      },
      {
        path: 'bluetooth/sharing-image',
        loadChildren: () => import('../../views/sharing-image/sharing-image.module').then( m => m.SharingImagePageModule)
      },
    
    ]
  
  },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
