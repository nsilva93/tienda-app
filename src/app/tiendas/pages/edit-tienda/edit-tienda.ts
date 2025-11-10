import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TiendasService } from '../../services/tiendas.service';
import { Tienda } from '../../models/tienda.model';

@Component({
  templateUrl: './edit-tienda.html',
  standalone: false,
})
export class EditTiendaComponent implements OnInit {

  tienda!: Tienda;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tiendasService: TiendasService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.tiendasService.getById(id).subscribe({
      next: data => (this.tienda = data)
    });
  }

  save(): void {
    this.tiendasService.update(this.tienda.id, this.tienda).subscribe({
      next: () => this.router.navigate(['/tiendas'])
    });
  }
}
