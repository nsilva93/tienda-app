import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./layout/layout.module').then(m => m.LayoutModule),
    canActivate: [AuthGuard]
},
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'articulos',
    loadChildren: () =>
      import('./features/articulos/articulos.module').then(m => m.ArticulosModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'carrito',
    loadChildren: () =>
      import('./features/carrito/carrito.module').then(m => m.CarritoModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'tiendas',
    loadChildren: () =>
      import('./features/tiendas/tiendas.module').then(m => m.TiendasModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'clientes',
    loadChildren: () =>
    import('./features/clientes/clientes.module').then(m => m.ClientesModule),
    canActivate: [AuthGuard]
  },
  { 
    path: 'carrito',
    loadChildren: () => 
    import('./features/carrito/carrito.module').then(m => m.CarritoModule), 
    canActivate: [AuthGuard] 
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];

