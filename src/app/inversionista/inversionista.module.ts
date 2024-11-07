// Modulos Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';

// Modulos App
import { PrimengModule } from '../commons/primeng/primeng.module';
import { InversionistaRoutingModule } from './inversionista-routing.module';

// Servicios
import { DatosGeograficosService } from './services/datos-geograficos.service';
import { InversionistaService } from './services/inversionista.service';
import { AuthService } from '../auth/services/auth.service';
import { NotificationService } from '../commons/services/notification.service';

// Componentes
import { DatosComponent } from './components/datos/datos.component';
import { ConsultarComprasComponent } from './components/consultar-compras/consultar-compras.component';


@NgModule({
  declarations: [
    DatosComponent,
    ConsultarComprasComponent
  ],
  providers: [
    NotificationService,
    DatosGeograficosService,
    InversionistaService,
    AuthService,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InversionistaRoutingModule,
    PrimengModule
  ]
})
export class InversionistaModule { }
