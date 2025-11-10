import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ListTiendasComponent } from '../../tiendas/pages/list-tiendas/list-tiendas';
import { CreateTiendaComponent } from '../../tiendas/pages/create-tienda/create-tienda';
import { EditTiendaComponent } from '../../tiendas/pages/edit-tienda/edit-tienda';



const routes: Routes = [
  { path: '', component: ListTiendasComponent },
  { path: 'crear', component: CreateTiendaComponent },
  { path: 'editar/:id', component: EditTiendaComponent }
];

@NgModule({
  declarations: [
    ListTiendasComponent,
    CreateTiendaComponent,
    EditTiendaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class TiendasModule {}

