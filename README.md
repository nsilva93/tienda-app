# TiendaApp – Frontend (Angular 20)

Este proyecto forma parte de la solución solicitada en la **Prueba Técnica para la posición de Desarrollador .NET**.  
El Frontend fue desarrollado con **Angular 20**, utilizando **Angular Material**, **Lazy Loading**, **Ruteo protegido con AuthGuard**, y **servicios HttpClient** para comunicarse con el API en .NET Core 3.1.

---

## Estado del Proyecto

Por falta de tiempo, **no se completó al 100%**, pero se entregan:

### Funcionalidades Implementadas
-  Estructura modular (features): *auth*, *artículos*, *carrito*, *tiendas*
-  Pantalla de **Login** funcional
-  Petición **POST /api/Auth/login** al backend  
  - Se obtiene el token correctamente  
  - El token se guarda en **localStorage**
-  **AuthGuard** activado y funcionando
  - Si no hay token → redirige a `/auth`
  - Si hay token → acceso permitido
-  Redirección a la pantalla de **artículos**
-  Pantalla de Artículos mostrando el texto *"articulos works!"* (inicio del módulo)
-  Proyecto organizado en componentes, módulos y servicios

### Funcionalidades Pendientes por Falta de Tiempo
- CRUD de Artículos
- CRUD de Tiendas
- CRUD de Cliente-Artículo (carrito / compras)
- Integración completa del carrito
- Diseño final de pantallas

> Nota: Debido a falta de tiempo, se decidió entregar el avance funcional con login, guard y navegación correcta.
