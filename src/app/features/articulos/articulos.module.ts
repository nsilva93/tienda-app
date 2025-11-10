import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListArticlesComponent } from '../../articles/pages/listar-articles/listar-articles';
import { CreateArticuloComponent } from '../../articles/pages/create-article/create-article';
import { EditArticuloComponent } from '../../articles/pages/edit-article/edit-article';



const routes: Routes = [
  { path: '', component: ListArticlesComponent },
  { path: 'crear', component: CreateArticuloComponent },
  { path: 'editar/:id', component: EditArticuloComponent }
];

@NgModule({
  declarations: [
    ListArticlesComponent,
    CreateArticuloComponent,
    EditArticuloComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class ArticulosModule {}

