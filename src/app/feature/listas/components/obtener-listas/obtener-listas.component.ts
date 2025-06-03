import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ObtenerListasService } from './services/obtener-listas.service';

@Component({
  selector: 'app-obtener-listas',
  standalone: true,
  templateUrl: './obtener-listas.component.html',
  styleUrls: ['./obtener-listas.component.scss'],
  imports: [CommonModule, FormsModule],
  providers: [ObtenerListasService]
})
export class ObtenerListasComponent {
  listas: any[] = [];
  cargando = false;
  error: string | null = null;

  constructor(private obtenerListasService: ObtenerListasService) {}
  mostrarBusqueda = false;
  mostrarListas() {
    this.mostrarBusqueda = true;
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

  eliminarLista(nombre: string) {
    if (confirm(`¿Seguro que deseas eliminar la lista "${nombre}"?`)) {
      this.obtenerListasService.eliminarLista(nombre).subscribe({
        next: () => {
          this.listas = this.listas.filter(l => l.nombre !== nombre);
          alert('Lista eliminada correctamente');
        },
        error: (err) => {
          alert('Error al eliminar la lista');
          console.error(err);
        }
      });
    }
  }

  nombreBusqueda: string = '';
busquedaActiva = false;

buscarLista() {
  const nombre = this.nombreBusqueda.trim();
  if (!nombre) {
    this.error = 'Ingrese un nombre de lista para buscar';
    return;
  }
  this.cargando = true;
  this.error = null;
  this.obtenerListasService.buscarListaPorNombre(nombre).subscribe({
    next: (lista) => {
      this.listas = lista ? [lista] : [];
      this.cargando = false;
      this.busquedaActiva = true;
      if (!lista) {
        this.error = 'No se encontró la lista de reproduccion';
      }
    },
    error: (err) => {
      this.error = 'No se encontró la lista de reproduccion';
      this.listas = [];
      this.cargando = false;
      this.busquedaActiva = true;
    }
  });
}

limpiarBusqueda() {
  this.nombreBusqueda = '';
  this.busquedaActiva = false;
  this.error = null;
  this.mostrarListas();
}

  
}
