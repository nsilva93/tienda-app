import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { CarritoItem } from '../../models/carrito-item.model';

@Component({
  templateUrl: './list-carrito.html',
  standalone: false
})
export class ListCarritoComponent implements OnInit {

  items: CarritoItem[] = [];
  loading = true;

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.carritoService.getCarrito().subscribe({
      next: (resp) => {
        this.items = resp;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  remove(articuloId: number): void {
    if (!confirm('¿Quitar del carrito?')) return;
    this.carritoService.remove(articuloId).subscribe({
      next: () => {
        this.items = this.items.filter(i => i.articuloId !== articuloId)
    }
  });
}

  calcularTotal(): number {
    if (!this.items || this.items.length === 0) return 0;
    return this.items.reduce((sum, item) => sum + (item.articulo?.precio ?? 0), 0);
  }
}
