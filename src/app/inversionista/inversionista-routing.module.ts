import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatosComponent } from './components/datos/datos.component';

const routes: Routes = [
  { path: 'datos-basicos', component: DatosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InversionistaRoutingModule { }
