import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticlesService } from '../../services/articles.service';

@Component({
  selector: 'app-create-articulo',
  templateUrl: './create-article.html',
  styleUrls: ['./create-article.scss'],
  standalone: false,
})
export class CreateArticuloComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private articuloService: ArticlesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      codigo: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: [0, [Validators.required, Validators.min(1)]],
      stock: [0, [Validators.required, Validators.min(0)]],
    });
  }

  get f() {
    return this.form.controls;
  }

  save(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.articuloService.create(this.form.value).subscribe({
      next: () => alert('Artículo registrado correctamente'),
      error: () => alert('Error al registrar el artículo'),
    });
  }
}

