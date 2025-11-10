import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CarritoComponent } from './carrito';
import { ListCarritoComponent } from '../../carrito/pages/list-carrito/list-carrito';

const routes: Routes = [
  { path: '', component: CarritoComponent },
  { path: '', component: ListCarritoComponent }
];

@NgModule({
  declarations: [CarritoComponent, ListCarritoComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  providers: [CurrencyPipe]
})
export class CarritoModule {}

