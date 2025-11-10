import { Component, OnInit } from '@angular/core';
import { CarritoService, CartItem } from './services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.html',
  styleUrls: ['./carrito.scss'],
  standalone: false
})
export class CarritoComponent implements OnInit {
  items: CartItem[] = [];
  loading = true;

  constructor(private carrito: CarritoService) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.carrito.get().subscribe({
      next: (res) => { this.items = res; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  remove(articuloId: number): void {
    if (!confirm('¿Quitar del carrito?')) return;
    this.carrito.remove(articuloId).subscribe({
      next: () => this.items = this.items.filter(i => i.articuloId !== articuloId)
    });
  }
}
