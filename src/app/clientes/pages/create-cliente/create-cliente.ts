import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from '../../services/clientes.service';
import { Cliente } from '../../models/cliente.model';

@Component({
  templateUrl: './create-cliente.html',
  standalone: false
})
export class CreateClienteComponent {

  cliente: Cliente = {
    id: 0,
    nombre: '',
    apellidos: '',
    email: '',
    passwordHash: '',
    direccion: ''
  };

  constructor(
    private clientesService: ClientesService,
    private router: Router
  ) {}

  save(): void {
    this.clientesService.create(this.cliente).subscribe({
      next: () => this.router.navigate(['/clientes'])
    });
  }
}
