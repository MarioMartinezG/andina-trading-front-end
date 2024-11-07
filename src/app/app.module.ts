import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Modulos de la aplicacion
import { AuthModule } from './auth/auth.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { TooltipModule } from 'primeng/tooltip';

// Servicios
import { MessageService } from 'primeng/api';
import { AuthService } from './auth/services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule,
    AppLayoutModule,
    TooltipModule,
  ],
  providers: [
    provideHttpClient(),
    MessageService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
