import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Guards
import { authGuard } from './auth/guard/auth.guard';

// Componentes transversales (Commons)
import { NotFoundPageComponent } from './commons/components/not-found-page/not-found-page.component';

// Componente plantilla Sakai
import { AppLayoutComponent } from './layout/app.layout.component';


const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  {
    path: 'home', component: AppLayoutComponent,
    canActivateChild: [authGuard],
    children: [
      { path: 'inversionista', loadChildren: () => import('./inversionista/inversionista.module').then(m => m.InversionistaModule) }
    ]
  },
  { path: 'not-found-page', component: NotFoundPageComponent, },
  { path: '**', redirectTo: 'not-found-page' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
