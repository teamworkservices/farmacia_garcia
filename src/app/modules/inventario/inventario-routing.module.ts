import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DosificacionComponent } from './components/dosificacion/dosificacion.component';

const routes: Routes = [
  {
    path: 'dosificacion',
    component:DosificacionComponent
    //loadChildren: () => import('./inventario.module').then(m =>m.InventarioModule),
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventarioRoutingModule { }
