import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ListasReproduccionService {
  private apiUrl = 'http://localhost:8080/lists';

  constructor(private http: HttpClient) {}

  crearLista(lista: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, lista);
  }
}
