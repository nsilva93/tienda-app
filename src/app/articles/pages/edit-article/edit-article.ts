import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticlesService } from '../../services/articles.service';

@Component({
  selector: 'app-edit-articulo',
  templateUrl: './edit-article.html',
  styleUrls: ['./edit-article.scss'],
  standalone: false
})
export class EditArticuloComponent implements OnInit {

  form!: FormGroup;
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private articuloService: ArticlesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.form = this.fb.group({
      codigo: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: [0, [Validators.required, Validators.min(1)]],
      stock: [0, [Validators.required, Validators.min(0)]]
    });

    this.loadData();
  }

  get f() {
    return this.form.controls;
  }

  loadData(): void {
    this.articuloService.getById(this.id).subscribe({
      next: (data) => this.form.patchValue(data),
      error: () => alert('Error al cargar el artículo')
    });
  }

  save(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.articuloService.update(this.id, this.form.value).subscribe({
      next: () => {
        alert('Artículo actualizado correctamente');
        this.router.navigate(['/articulos']);
      },
      error: () => alert('Error al actualizar el artículo')
    });
  }
}

