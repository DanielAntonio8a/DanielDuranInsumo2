import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)  },
  // {    path: 'tab4',    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)  }
  //BORRAMOS ESO CRACK
  //Ahora vamos a definir la ruta del nuevo tab en tabs.routing.module.ts:
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
