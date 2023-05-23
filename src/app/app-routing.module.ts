import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  
  {
    path: 'appareil',
    loadChildren: () => import('./views/appareil/appareil.module').then( m => m.AppareilPageModule)
  },
  {
    path: 'bluetooth',
    loadChildren: () => import('./views/bluetooth/bluetooth.module').then( m => m.BluetoothPageModule)
  },
  {
    path: 'apropos',
    loadChildren: () => import('./views/apropos/apropos.module').then( m => m.AproposPageModule)
  },
  {
    path: 'accueil',
    loadChildren: () => import('./views/accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./views/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'sharing-image',
    loadChildren: () => import('./views/sharing-image/sharing-image.module').then( m => m.SharingImagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}


