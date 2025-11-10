import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  error = '';

    constructor(
    private authService: AuthService,
    private router: Router
  ) {}

onSubmit() {
  this.authService.login(this.email, this.password).subscribe({
    next: (response) => {
      console.log("TOKEN GUARDADO:", response);

      this.router.navigate(['/dashboard']);
    },
    error: (err) => {
      console.error("Error en login", err);
      alert("Credenciales incorrectas");
    }
  });
}

}
