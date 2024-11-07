import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './../services/auth.service'; // Asegúrate de que la ruta sea correcta
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if(!authService.isLoggedIn()) {
    router.navigate(['/auth/login']);
    return false;
  }

  return authService.isLoggedIn();
};