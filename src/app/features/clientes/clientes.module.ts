import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { ListClientesComponent } from '../../clientes/pages/list-clientes/list-clientes';
import { CreateClienteComponent } from '../../clientes/pages/create-cliente/create-cliente';
import { EditClienteComponent } from '../../clientes/pages/edit-cliente/edit-cliente';

const routes: Routes = [
  { path: '', component: ListClientesComponent },
  { path: 'crear', component: CreateClienteComponent },
  { path: 'editar/:id', component: EditClienteComponent }
];

@NgModule({
  declarations: [
    ListClientesComponent,
    CreateClienteComponent,
    EditClienteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ClientesModule {}
