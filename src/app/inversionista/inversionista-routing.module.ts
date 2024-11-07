import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DatosComponent } from './components/datos/datos.component';
import { ConsultarComprasComponent } from './components/consultar-compras/consultar-compras.component';

const routes: Routes = [
  { path: 'datos-basicos', component: DatosComponent },
  { path: 'consultar-compras', component: ConsultarComprasComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InversionistaRoutingModule { }
