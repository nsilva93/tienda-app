import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-articles',
  templateUrl: './listar-articles.html',
  styleUrls: ['./listar-articles.scss'],
  standalone: false
})
export class ListArticlesComponent implements OnInit {

  items: any[] = [];
  loading = true;

  constructor(
    private articuloService: ArticlesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.articuloService.getAll().subscribe({
      next: res => {
        this.items = res;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        alert('Error al cargar la lista de artículos');
      }
    });
  }

  editar(id: number) {
    this.router.navigate(['/articulos/editar', id]);
  }

  eliminar(id: number) {
    if (!confirm('¿Seguro que quieres eliminar este artículo?')) return;

    this.articuloService.delete(id).subscribe({
      next: () => {
        alert('Artículo eliminado');
        this.load();
      },
      error: () => alert('No se pudo eliminar el artículo')
    });
  }

  nuevo() {
    this.router.navigate(['/articulos/crear']);
  }

  agregarCarrito(id: number) {
  this.articuloService.addToCart(id).subscribe({
    next: () => alert('Artículo agregado al carrito'),
    error: () => alert('No se pudo agregar al carrito')
  });
}

}


