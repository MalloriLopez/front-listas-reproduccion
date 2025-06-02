import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ListasReproduccionService {
  private apiUrl = 'http://localhost:8080/lists';

  constructor(private http: HttpClient) {}

  crearLista(lista: any): Observable<any> {
    const username = 'usuarioTest';
    const password = 'password';
    const basicAuth = 'Basic ' + btoa(`${username}:${password}`);

    const headers = new HttpHeaders({
      Authorization: basicAuth,
      'Content-Type': 'application/json'
    });

    return this.http.post<any>(this.apiUrl, lista, { headers });
  }
}
