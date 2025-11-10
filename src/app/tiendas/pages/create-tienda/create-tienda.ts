import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TiendasService } from '../../services/tiendas.service';
import { Tienda } from '../../models/tienda.model';

@Component({
  templateUrl: './create-tienda.html',
  standalone: false,
})
export class CreateTiendaComponent {

  tienda: Tienda = {
    id: 0,
    sucursal: '',
    direccion: ''
  };

  constructor(
    private tiendasService: TiendasService,
    private router: Router
  ) {}

  save(): void {
    this.tiendasService.create(this.tienda).subscribe({
      next: () => this.router.navigate(['/tiendas'])
    });
  }
}
