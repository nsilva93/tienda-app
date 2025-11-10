import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private apiUrl = 'https://localhost:5001/api/Auth/login';

  constructor(private http: HttpClient, private router: Router) {}

login(email: string, password: string) {
  return this.http.post<{ token: string }>(this.apiUrl, { email, password })
    .pipe(
      tap(res => {
        console.log('RESPUESTA LOGIN:', res);

        const token = res.token.replace(/"/g, '');

        localStorage.setItem('token', token);
      })
    );
}

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}

