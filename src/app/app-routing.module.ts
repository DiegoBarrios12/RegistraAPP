import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'asistencia',
    loadChildren: () => import('./asistencia/asistencia.module').then( m => m.AsistenciaPageModule)
  },
  {
    path: 'reestablecer',
    loadChildren: () => import('./reestablecer/reestablecer.module').then( m => m.ReestablecerPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
