import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarritoItem } from '../models/carrito-item.model';

@Injectable({ providedIn: 'root' })
export class CarritoService {

  private baseUrl = 'https://localhost:5001/api/Carrito';

  constructor(private http: HttpClient) {}

  getCarrito(): Observable<CarritoItem[]> {
    return this.http.get<CarritoItem[]>(this.baseUrl);
  }

  add(articuloId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, { articuloId });
  }

  remove(articuloId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/remove`, { articuloId });
  }
}
