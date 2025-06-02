import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObtenerListasService } from './services/obtener-listas.service';

@Component({
  selector: 'app-obtener-listas',
  standalone: true,
  templateUrl: './obtener-listas.component.html',
  styleUrls: ['./obtener-listas.component.scss'],
  imports: [CommonModule],
  providers: [ObtenerListasService]
})
export class ObtenerListasComponent {
  listas: any[] = [];
  cargando = false;
  error: string | null = null;

  constructor(private obtenerListasService: ObtenerListasService) {}

  mostrarListas() {
    this.cargando = true;
    this.error = null;
    this.obtenerListasService.obtenerListas().subscribe({
      next: (listas) => {
        this.listas = listas;
        this.cargando = false;
      },
      error: (err) => {
        this.error = 'Error al obtener las listas';
        this.cargando = false;
      }
    });
  }
}
