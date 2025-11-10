import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';
import { Cliente } from '../../models/cliente.model';

@Component({
  templateUrl: './list-clientes.html',
  standalone: false
})
export class ListClientesComponent implements OnInit {

  clientes: Cliente[] = [];
  loading = true;

  constructor(private clientesService: ClientesService) {}

  ngOnInit(): void {
    this.clientesService.getAll().subscribe({
      next: resp => {
        this.clientes = resp;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  delete(id: number): void {
    if (!confirm('¿Eliminar cliente?')) return;

    this.clientesService.delete(id).subscribe({
      next: () => {
        this.clientes = this.clientes.filter(c => c.id !== id);
      }
    });
  }
}
