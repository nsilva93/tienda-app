import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout';
import { NavbarComponent } from './navbar/navbar';
import { HomeComponent } from './home/home';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
       { path: '', component: HomeComponent },
      { path: 'carrito', loadChildren: () =>import('../features/carrito/carrito.module').then(m => m.CarritoModule)},
      { path: 'articulos', loadChildren: () => import('../features/articulos/articulos.module').then(m => m.ArticulosModule) },
      { path: 'tiendas', loadChildren: () => import('../features/tiendas/tiendas.module').then(m => m.TiendasModule) },
      { path: 'clientes', loadChildren: () => import('../features/clientes/clientes.module').then(m => m.ClientesModule) },
      { path: 'carrito', loadChildren: () => import('../features/carrito/carrito.module').then(m => m.CarritoModule) }
    ]
  }
];

@NgModule({
  declarations: [
    LayoutComponent, 
    NavbarComponent, 
    HomeComponent 
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LayoutModule {}

