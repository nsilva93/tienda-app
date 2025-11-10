import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AuthService } from '../../features/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

canActivate(): boolean | UrlTree {
  console.log('GUARD EJECUTADO. Token:', this.auth.isAuthenticated());
  if (this.auth.isAuthenticated()) {
    console.log('Autorizado');
    return true;
  }
  console.log('No autorizado, redirigiendo al login');
  return this.router.parseUrl('/auth');
}
}