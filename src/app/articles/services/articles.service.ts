import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/article.model';

@Injectable({ providedIn: 'root' })
export class ArticlesService {
  private baseUrl = 'https://localhost:5001/api/articulos';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Article[]> {
    return this.http.get<Article[]>(this.baseUrl);
  }

  getById(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.baseUrl}/${id}`);
  }

  create(article: Article): Observable<Article> {
    return this.http.post<Article>(this.baseUrl, article);
  }

  update(id: number, article: Article): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${id}`, article);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
  
  addToCart(articuloId: number) {
    return this.http.post('https://localhost:5001/api/Carrito/add', { articuloId });
  }

}
