import { Component, OnInit } from '@angular/core';
import { TiendasService } from '../../services/tiendas.service';
import { Tienda } from '../../models/tienda.model';

@Component({
  templateUrl: './list-tiendas.html',
  standalone: false,
})
export class ListTiendasComponent implements OnInit {
  tiendas: Tienda[] = [];
  loading = true;

  constructor(private tiendasService: TiendasService) {}

  ngOnInit(): void {
    this.tiendasService.getAll().subscribe({
      next: resp => {
        this.tiendas = resp;
        this.loading = false;
      },
      error: () => (this.loading = false)
    });
  }

  delete(id: number): void {
    if (!confirm('¿Eliminar tienda?')) return;
    this.tiendasService.delete(id).subscribe({
      next: () =>
        (this.tiendas = this.tiendas.filter(t => t.id !== id))
    });
  }
}
