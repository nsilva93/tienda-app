import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tienda } from '../models/tienda.model';

@Injectable({ providedIn: 'root' })
export class TiendasService {
  private baseUrl = 'https://localhost:5001/api/tiendas';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Tienda[]> {
    return this.http.get<Tienda[]>(this.baseUrl);
  }

  getById(id: number): Observable<Tienda> {
    return this.http.get<Tienda>(`${this.baseUrl}/${id}`);
  }

  create(tienda: Tienda): Observable<Tienda> {
    return this.http.post<Tienda>(this.baseUrl, tienda);
  }

  update(id: number, tienda: Tienda): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${id}`, tienda);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
