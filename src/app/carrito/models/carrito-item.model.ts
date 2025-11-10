export interface CarritoItem {
  articuloId: number;
  cantidad: number;
  fecha: string;
  articulo: {
    id: number;
    codigo: string;
    descripcion: string;
    precio: number;
    stock: number;
  }
}
