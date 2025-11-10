import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CartItem {
  id: number;
  clienteId: number;
  articuloId: number;
  fecha: string;
}

@Injectable({ providedIn: 'root' })
export class CarritoService {
  private api = 'https://localhost:5001/api/Carrito';

  constructor(private http: HttpClient) {}

  get(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(this.api);
  }

  add(articuloId: number) {
    return this.http.post(`${this.api}/add`, { articuloId });
  }

  remove(articuloId: number) {
    return this.http.post(`${this.api}/remove`, { articuloId });
  }
}
