import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from '../../services/clientes.service';
import { Cliente } from '../../models/cliente.model';

@Component({
  templateUrl: './edit-cliente.html',
  standalone: false
})
export class EditClienteComponent implements OnInit {

  cliente!: Cliente;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientesService: ClientesService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.clientesService.getById(id).subscribe({
      next: resp => this.cliente = resp
    });
  }

  save(): void {
    this.clientesService.update(this.cliente.id, this.cliente).subscribe({
      next: () => this.router.navigate(['/clientes'])
    });
  }
}
