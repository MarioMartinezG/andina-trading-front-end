import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Rutas
import { AuthRoutingModule } from './auth-routing.module';

// Modulos
import { PrimengModule } from '../commons/primeng/primeng.module';

// Servicios
import { LayoutService } from '../layout/service/app.layout.service';
import { AuthService } from './services/auth.service';

// Componentes
import { LoginComponent } from './components/login-component/login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  providers: [
    LayoutService,
    AuthService,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    PrimengModule
  ]
})
export class AuthModule { }
