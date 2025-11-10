import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
  standalone: false
})
export class NavbarComponent implements OnInit {

  clienteNombre: string | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      this.clienteNombre = payload?.nombre ?? null;
    }
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/auth']);
  }
}
